import URI from "../class/URI";

const Uri = {
  refresh: new URI("teacher/token"),
  signup: new URI("teacher/register"),
} as const;

export default Uri;
