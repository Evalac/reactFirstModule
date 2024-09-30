import { format } from 'date-fns';

function formatEventStart(start) {
  return format(new Date(start), 'MMMM dd yyyy, HH:mm');
}

export { formatEventStart };
