const chefs = [
  {
    name: "Hifzur Rahman",
    role: "HEAD CHEF",
    experience: "12 years experience",
    image: "https://images.unsplash.com/photo-1574966740637-12c84035a4f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarfraz Ansari",
    role: "PASTRY CHEF",
    experience: "10 years experience",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=1087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Faiz Ansari",
    role: "PIZZA ARTISAN",
    experience: "9 years experience",
    image: "https://images.unsplash.com/photo-1562514155-444b9a967dfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dinesh lal",
    role: "GRILL MASTER",
    experience: "8 years experience",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function ChefSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 scroll-mt-[100px]" id="chefs">
      <div className="mx-auto max-w-[1280px]" data-aos="zoom-in">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 font-serif text-sm italic text-red-500">
            The Culinary Team
          </p>

          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Expert{" "}
            <span className="text-red-500">Chefs</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" data-aos="zoom-in">
          {chefs.map((chef) => (
            <div
              key={chef.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              {/* Image */}
              <img
                src={chef.image}
                alt={chef.name}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="px-4 py-4 text-center">
                <h3 className="text-base font-bold text-gray-800">
                  {chef.name}
                </h3>

                <p className="mt-1 text-[11px] font-semibold tracking-wide text-red-500">
                  {chef.role}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  {chef.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
   
  );
}