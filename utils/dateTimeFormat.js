const options = {
  year: "numeric",
  month: "2-digit",
};

function format(date) {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

export { format };
