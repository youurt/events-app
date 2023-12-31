export interface EventifyVenue {
  id: string;
  name: string;
  contentUrl: string;
  live: boolean;
  direction: string;
}

interface EventifyPick {
  id: string;
  blurb: string;
}

interface EventifyArtist {
  id: string;
  name: string;
  _id: {
    $oid: string;
  };
}
export interface EventifyEvent {
  _id: string;
  title: string;
  flyerFront: string | null | undefined;
  attending: number;
  date: string;
  startTime: string;
  endTime: string;
  contentUrl: string | null;
  venue: EventifyVenue;
  pick: EventifyPick;
  artists: EventifyArtist[];
  city: string;
  country: string;
  private: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __v: number;
}
