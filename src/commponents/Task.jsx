




const Task = () => {
    return (
      <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 text-sm bg-gray-200 text-gray-700 font-semibold">Column 1</th>
            <th className="py-2 px-4 text-sm bg-gray-200 text-gray-700 font-semibold">Column 2</th>
            <th className="py-2 px-4 text-sm bg-gray-200 text-gray-700 font-semibold">Column 3</th>
            <th className="py-2 px-4 text-sm bg-gray-200 text-gray-700 font-semibold">Column 4</th>
            <th className="py-2 px-4 text-sm bg-gray-200 text-gray-700 font-semibold">Column 5</th>
            <th className="py-2 px-4 text-sm bg-gray-200 text-gray-700 font-semibold">Column 6</th>
            <th className="py-2 px-4 text-sm bg-gray-200 text-gray-700 font-semibold">Column 7</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data rows */}
          {[1, 2, 3, 4, 5].map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4 text-sm text-center">{`Data 1 - ${row}`}</td>
              <td className="py-2 px-4 text-sm text-center">{`Data 2 - ${row}`}</td>
              <td className="py-2 px-4 text-sm text-center">{`Data 3 - ${row}`}</td>
              <td className="py-2 px-4 text-sm text-center">{`Data 4 - ${row}`}</td>
              <td className="py-2 px-4 text-sm text-center">{`Data 5 - ${row}`}</td>
              <td className="py-2 px-4 text-sm text-center">{`Data 6 - ${row}`}</td>
              <td className="py-2 px-4 text-sm text-center">{`Data 7 - ${row}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Task;