import { DatePipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventifyVenue } from '@eventify-org/common-api';

@Component({
  selector: 'eventify-org-event-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DatePipe, MatIconModule, MatChipsModule, NgIf, MatTooltipModule],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardComponent {
  @HostBinding('class.c-event-card') class = true;

  /**
   * The title of the event.
   */
  @Input({ required: true }) title!: string;

  /**
   * The image path of the event.
   */
  @Input() imagePath?: string | null;

  /**
   * The location of the event.
   */
  @Input({ required: true }) location!: EventifyVenue;

  /**
   * The starting date of the event.
   */
  @Input({ required: true }) startingDate!: string;

  /**
   * The ending date of the event.
   */
  @Input({ required: true }) endingDate!: string;

  /**
   * Emits when the add to cart button is clicked.
   */
  @Output() addToCart = new EventEmitter<void>();

  /**
   * The fallback image path.
   */
  protected fallbackImagePath = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg';

  /**
   * When the image fails to load, this method is called. It is done, so the fallback image can be loaded.
   *
   * @param event The event.
   */
  protected onImageError(event: Event) {
    if (event.target) {
      (event.target as HTMLImageElement).setAttribute('src', this.fallbackImagePath);
    }
  }
}
