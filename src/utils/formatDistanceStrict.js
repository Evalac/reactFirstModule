import { formatDistanceStrict } from 'date-fns';

function durationTime(start, end) {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
}

export { durationTime };
