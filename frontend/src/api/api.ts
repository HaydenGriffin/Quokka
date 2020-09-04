import { ArtistAPI } from './artist/artist';
import { TourAPI } from './tour/tour';
import { TourMemberAPI } from './tourMember/tourMember';

const baseUrl = 'https://casbp529v8.execute-api.eu-west-2.amazonaws.com/dev';

const artist = new ArtistAPI(baseUrl);
const tour = new TourAPI(baseUrl);
const tourMember = new TourMemberAPI(baseUrl);

export { artist, tour, tourMember };
