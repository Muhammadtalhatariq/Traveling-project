import { useState } from "react";

const form = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    depart: "",
    return: "",
    travelers: "",
    cabinClass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to API
    console.log(formData);
    setFormData({
      from: "",
      to: "",
      depart: "",
      return: "",
      travelers: "",
      cabinClass: "",
    });
  };

  return (
    <>
      <section className="container mx-auto py-6  sm:px-2 flex">
        <form
          onSubmit={handleSubmit}
          className="00 rounded-lg p-8 shadow-md text-black"
        >
          <div className="flex flex-wrap xl:flex-nowrap gap-2 justify-center items-center">
            <div className="from-to flex gap-2 w-72 lg:w-96">
              <div className="bg-white rounded-2xl p-3">
                <label htmlFor="from" className="block mb-2">
                  From
                </label>
                <div>
                  <select
                    value={formData.from}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-xl outline-none  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="from"
                    id="from"
                  >
                    <option value="">Country, City, Airport</option>
                    <option value="new_york">New York</option>
                    <option value="london">London</option>
                    <option value="paris">Paris</option>
                    <option value="tokyo">Tokyo</option>
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3">
                <label htmlFor="to" className="block mb-2">
                  To
                </label>
                <div>
                  <select
                    value={formData.to}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-xl outline-none text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="to"
                    id="to"
                  >
                    <option value="">Country, City, Airport</option>
                    <option value="new_york">New York</option>
                    <option value="london">London</option>
                    <option value="paris">Paris</option>
                    <option value="tokyo">Tokyo</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-3 w-72 lg:w-52 ">
              <label htmlFor="depart" className="block mb-2">
                Depart
              </label>
              <input
                type="date"
                id="depart"
                name="depart"
                value={formData.depart}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md outline-none text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="bg-white rounded-2xl p-3 w-72 lg:w-52">
              <label htmlFor="return" className="block mb-2">
                Return
              </label>
              <input
                type="date"
                id="return"
                name="return"
                value={formData.return}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md outline-none text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="bg-white rounded-2xl p-3 w-72 lg:w-52">
              <label htmlFor="travelers" className="block mb-2">
                Travelers & Cabin Class
              </label>
              <input
                type="text"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md outline-none text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1 Adult, Economy"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Send Query"
                className="w-full px-4 py-4 rounded-2xl outline-none bg-blue-600 duration-1000 hover:bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default form;
