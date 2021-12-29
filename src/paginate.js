import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

export function paginateInfo(items, pageNumber, pageSize) {
  const end = Math.min(items.length, pageNumber * pageSize);
  const start = Math.min(items.length, ((pageNumber * pageSize) - pageSize) + 1);
  const total = items.length;

  return `Showing ${start} to ${end} of ${total}`;
}
