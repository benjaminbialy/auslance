export default interface JobInterface {
  id: number;
  title: string;
  location: string;
  employerName: string;
  description: string;
  skills: Array<string>;
  budget: number;
  hoursPerWeek: number;
  timePosted: number;
  noProposals: number;
  employerReview: number;
}
