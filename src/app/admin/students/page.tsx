export default function Students() {
    return (
        <main className="flex-1 p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Students</h1>
                <button className="px-6 py-2 text-white bg-[var(--primary)] rounded-lg shadow-md hover:bg-[var(--primary)]/80">Add Student</button>
            </div>
            <div className="mb-6">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </div>
                    <input className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] dark:text-gray-200" placeholder="Search students by name or email" type="text" />
                </div>
            </div>
            <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3" scope="col">
                                Name
                            </th>
                            <th className="px-6 py-3" scope="col">
                                Email
                            </th>
                            <th className="px-6 py-3" scope="col">
                                Course Enrollments
                            </th>
                            <th className="px-6 py-3 text-right" scope="col">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Ethan Carter</td>
                            <td className="px-6 py-4">ethan.carter@email.com</td>
                            <td className="px-6 py-4">Introduction to Programming</td>
                            <td className="px-6 py-4 text-right">
                                <a className="font-medium text-[var(--primary)] hover:underline" href="#">
                                    Edit
                                </a>
                                <a className="ml-4 font-medium text-red-500 hover:underline" href="#">
                                    Delete
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Olivia Bennett</td>
                            <td className="px-6 py-4">olivia.bennett@email.com</td>
                            <td className="px-6 py-4">Data Science Fundamentals</td>
                            <td className="px-6 py-4 text-right">
                                <a className="font-medium text-[var(--primary)] hover:underline" href="#">
                                    Edit
                                </a>
                                <a className="ml-4 font-medium text-red-500 hover:underline" href="#">
                                    Delete
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Noah Thompson</td>
                            <td className="px-6 py-4">noah.thompson@email.com</td>
                            <td className="px-6 py-4">Web Development Basics</td>
                            <td className="px-6 py-4 text-right">
                                <a className="font-medium text-[var(--primary)] hover:underline" href="#">
                                    Edit
                                </a>
                                <a className="ml-4 font-medium text-red-500 hover:underline" href="#">
                                    Delete
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Ava Martinez</td>
                            <td className="px-6 py-4">ava.martinez@email.com</td>
                            <td className="px-6 py-4">Machine Learning Essentials</td>
                            <td className="px-6 py-4 text-right">
                                <a className="font-medium text-[var(--primary)] hover:underline" href="#">
                                    Edit
                                </a>
                                <a className="ml-4 font-medium text-red-500 hover:underline" href="#">
                                    Delete
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Liam Harris</td>
                            <td className="px-6 py-4">liam.harris@email.com</td>
                            <td className="px-6 py-4">Mobile App Development</td>
                            <td className="px-6 py-4 text-right">
                                <a className="font-medium text-[var(--primary)] hover:underline" href="#">
                                    Edit
                                </a>
                                <a className="ml-4 font-medium text-red-500 hover:underline" href="#">
                                    Delete
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sophia Clark</td>
                            <td className="px-6 py-4">sophia.clark@email.com</td>
                            <td className="px-6 py-4">Cloud Computing Fundamentals</td>
                            <td className="px-6 py-4 text-right">
                                <a className="font-medium text-[var(--primary)] hover:underline" href="#">
                                    Edit
                                </a>
                                <a className="ml-4 font-medium text-red-500 hover:underline" href="#">
                                    Delete
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Jackson Lewis</td>
                            <td className="px-6 py-4">jackson.lewis@email.com</td>
                            <td className="px-6 py-4">Cybersecurity Basics</td>
                            <td className="px-6 py-4 text-right">
                                <a className="font-medium text-[var(--primary)] hover:underline" href="#">
                                    Edit
                                </a>
                                <a className="ml-4 font-medium text-red-500 hover:underline" href="#">
                                    Delete
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
