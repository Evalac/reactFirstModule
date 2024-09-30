import { format, compareAsc } from 'date-fns';

function formatEventStart(start) {
  return format(new Date(start), 'MM/dd/yyyy');
}

export { formatEventStart };
