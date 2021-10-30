  const languages = [
    {
      id: 1,
      name: "html",
      year: 20,
    },
    {
      id: 2,
      name: "css",
      year: 20,
    },
    {
      id: 3,
      name: "js",
      year: 20,
    },
  ];
  return (
    <div>
      <table className="table-auto border-collapse border border-green-800">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-t border-green-600">sfsfsfsfs</td>
            <td>sfhu7fsfs</td>
            <td>ytytufs</td>
          </tr>
          <tr>
            <td>fdfsfsfs</td>
            <td>sfhu7fsfs</td>
            <td>ytytufs</td>
          </tr>
          {languages.map((lang) => {
            return (
                <tr>
                  <td className="text-red-500 border-t border-green-600">{lang.name}</td>
                  <td className="text-red-500 border-t border-green-600">{lang.id}</td>
                  <td className="text-red-500 border-t border-green-600">{lang.year}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

