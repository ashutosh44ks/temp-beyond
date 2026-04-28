const Filters = ({
  search,
  handleSearch,
  statusFilter,
  handleStatusChange,
}) => {
  return (
    <div className="flex justify-between border-b pb-4">
      <input
        value={search}
        onChange={handleSearch}
        placeholder="search by name"
        className="border p-1 rounded-md"
      />
      <select
        value={statusFilter}
        onChange={handleStatusChange}
        className="border p-1 rounded-md"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default Filters;
