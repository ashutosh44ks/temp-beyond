import { useMemo, useState } from "react";
import Filters from "./components/Filters";
import { users } from "./components/constants";

function App() {
  // filter states
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [statusFilter, setStatusFilter] = useState("all");
  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  // using memo to filter over the users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      let matchStatus = false;
      if (statusFilter === "all") {
        matchStatus = true;
      }
      if (user.status === statusFilter) {
        matchStatus = true;
      }

      let matchSearch = false;
      if (search === "") {
        matchSearch = true;
      } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
        matchSearch = true;
      }
      return matchStatus && matchSearch;
    });
  }, [search, statusFilter]);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="border rounded-2xl p-4 w-full max-w-2xl h-[75vh] overflow-y-auto">
        <Filters
          search={search}
          handleSearch={handleSearch}
          statusFilter={statusFilter}
          handleStatusChange={handleStatusChange}
        />
        <div className="mt-4 flex flex-col gap-4">
          {filteredUsers.length === 0 && <div>No results found</div>}
          {filteredUsers.map((user) => {
            return (
              <div key={user.id} className="flex gap-4">
                <span>{user.name}</span>
                <span>({user.status})</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
