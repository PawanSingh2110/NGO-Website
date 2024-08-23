"use client"
import React, { useState } from "react";

const VolunteerForm = () => {
  const tasks = [
    "Pet Bathing",
    "Pet Walking",
    "Physiotherapy",
    "Working in our isolation ward",
    "Campus Enrichment (Painting, Gardening, Cleaning)",
    "Photography/ Videography",
    "Designing publicity material",
    "Research - Shelter grants, behavioral workshops, animal assisted therapy in shelters, etc.",
    "Collecting in-kind donations for our organization",
    "Adoption counselling",
    "Others",
  ];

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    hours: "",
    experience: "",
    qualities: "",
    reason: "",
    preference: "",
    selectedTasks: [],
    notARobot: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formValues.name.trim()) errors.name = "Name is required";
    if (!formValues.email.trim()) errors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      errors.email = "Email address is invalid";
    if (!formValues.phone.trim()) errors.phone = "Phone number is required";
    if (!formValues.profession.trim())
      errors.profession = "Profession is required";
    if (!formValues.hours.trim())
      errors.hours = "Number of hours is required";
    if (formValues.selectedTasks.length === 0)
      errors.selectedTasks = "Please select at least one task";
    if (!formValues.experience.trim())
      errors.experience = "Experience is required";
    if (!formValues.qualities.trim())
      errors.qualities = "Qualities/Skills are required";
    if (!formValues.reason.trim())
      errors.reason = "Reason for volunteering is required";
    if (!formValues.preference.trim())
      errors.preference = "Preference is required";
    if (!formValues.notARobot) errors.notARobot = "Please verify you're not a robot";

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckboxChange = (task) => {
    setFormValues((prev) => ({
      ...prev,
      selectedTasks: prev.selectedTasks.includes(task)
        ? prev.selectedTasks.filter((t) => t !== task)
        : [...prev.selectedTasks, task],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
      console.log(formValues);
      // Handle form submission here, e.g., send data to the backend
    }
  };

  return (
    <div>
      <div className="whatwedo h-[400px] flex justify-center items-center text-center">
        <h1 className="text-6xl text-white font-bold">Become a Volunteer</h1>
      </div>
      <div className="max-w-3xl mt-5 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
        Give us a Helping Hand!
      </h1>
      <p className="text-center mb-6">
        If you wish to visit us and share the duty and joy of working for
        rescued animals, you are most welcome! We really appreciate your
        thoughtfulness, and we are sure that this experience is going to be as
        enriching for you as it will be joyous for our rescued animals. Visit
        our shelter and meet our staff, and get ready to have your world rocked
        by these beautiful beings!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.name ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {formErrors.name && (
            <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email address *
          </label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.phone ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {formErrors.phone && (
            <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Your profession? *
          </label>
          <input
            type="text"
            name="profession"
            value={formValues.profession}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.profession ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {formErrors.profession && (
            <p className="text-red-500 text-xs mt-1">{formErrors.profession}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Number of hours you wish to volunteer? *
          </label>
          <input
            type="number"
            name="hours"
            value={formValues.hours}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.hours ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {formErrors.hours && (
            <p className="text-red-500 text-xs mt-1">{formErrors.hours}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Please select the most appropriate task for you: *
          </label>
          <div className="space-y-2">
            {tasks.map((task) => (
              <label key={task} className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={task}
                  checked={formValues.selectedTasks.includes(task)}
                  onChange={() => handleCheckboxChange(task)}
                />
                {task}
              </label>
            ))}
          </div>
          {formErrors.selectedTasks && (
            <p className="text-red-500 text-xs mt-1">
              {formErrors.selectedTasks}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Please tell us about your previous experience handling dogs
            (shelter, home, rescue, etc.) *
          </label>
          <textarea
            name="experience"
            value={formValues.experience}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.experience ? "border-red-500" : "border-gray-300"
            }`}
            required
          ></textarea>
          {formErrors.experience && (
            <p className="text-red-500 text-xs mt-1">
              {formErrors.experience}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            What qualities/skills can you bring to this volunteering position? *
          </label>
          <textarea
            name="qualities"
            value={formValues.qualities}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.qualities ? "border-red-500" : "border-gray-300"
            }`}
            required
          ></textarea>
          {formErrors.qualities && (
            <p className="text-red-500 text-xs mt-1">{formErrors.qualities}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Why do you want to volunteer? *
          </label>
          <textarea
            name="reason"
            value={formValues.reason}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.reason ? "border-red-500" : "border-gray-300"
            }`}
            required
          ></textarea>
          {formErrors.reason && (
            <p className="text-red-500 text-xs mt-1">{formErrors.reason}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Do you prefer coming in on weekends or weekdays? *
          </label>
          <textarea
            name="preference"
            value={formValues.preference}
            onChange={handleInputChange}
            className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${
              formErrors.preference ? "border-red-500" : "border-gray-300"
            }`}
            required
          ></textarea>
          {formErrors.preference && (
            <p className="text-red-500 text-xs mt-1">{formErrors.preference}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Please verify you're not a robot *
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="notARobot"
              checked={formValues.notARobot}
              onChange={handleInputChange}
              className={`mr-2 ${
                formErrors.notARobot ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            <span>I'm not a robot</span>
          </div>
          {formErrors.notARobot && (
            <p className="text-red-500 text-xs mt-1">{formErrors.notARobot}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default VolunteerForm;
