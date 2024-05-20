import "../Home/index.css";

const CategoryFilters = (props) => {
  const { item, activeFilter, activeFilterChanged } = props;

  const { name } = item;

  const tabChanged = () => {
    activeFilterChanged(item);
  };

  return (
    <li
      onClick={tabChanged}
      className={`tab-item ${
        activeFilter !== null &&
        activeFilter.uniqueId === item.uniqueId &&
        "tab-item-active"
      }`}
    >
      {name}
    </li>
  );
};

export default CategoryFilters;
