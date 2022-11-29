function createBillItem(form) {
  const { title, category, date, value } = form;

  const li = createLiBillItem();
  const itemIcon = createItemIcon();
  const itemDescription = createItemDescription(title, category);
  const itemValues = createItemValues(value, date);

  li.appendChild(itemIcon);
  li.appendChild(itemDescription);
  li.appendChild(itemValues);

  const billGroup = document.querySelector(".bill-group");
  billGroup.appendChild(li);
}

function createLiBillItem() {
  const li = document.createElement("li");
  li.classList.add("bill-item");

  return li;
}

function createItemIcon() {
  const listIcon = document.createElement("div");
  listIcon.classList.add("item__icon", "add");

  const icon = document.createElement("i");
  icon.classList.add("bi", "bi-caret-up-fill");

  listIcon.appendChild(icon);
  return listIcon;
}

function createItemDescription(title, group) {
  const div = document.createElement("div");
  div.classList.add("item__description");

  const itemTitle = document.createElement("div");
  itemTitle.classList.add("item__title");

  const itemGroup = document.createElement("div");
  itemGroup.classList.add("item__group");

  itemTitle.innerHTML = title;
  itemGroup.innerHTML = group;

  div.appendChild(itemTitle);
  div.appendChild(itemGroup);

  return div;
}

function createItemValues(value, date) {
  const div = document.createElement("div");
  div.classList.add("item__value");

  const itemAmount = document.createElement("div");
  itemAmount.classList.add("item__amount", "add");

  const itemDate = document.createElement("div");
  itemDate.classList.add("item__Date");

  itemAmount.innerHTML = `$ ${parseFloat(value).toFixed(2)}`;
  itemDate.innerHTML = new Date(date).toLocaleDateString();

  div.appendChild(itemAmount);
  div.appendChild(itemDate);

  return div;
}