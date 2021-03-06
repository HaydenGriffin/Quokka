import { ArtistAPI } from './artist/artist';
import { TourAPI } from './tour/tour';
import { TourMemberAPI } from './tourMember/tourMember';

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const artist = new ArtistAPI(baseUrl);
const tour = new TourAPI(baseUrl);
const tourMember = new TourMemberAPI(baseUrl);

export { artist, tour, tourMember };
