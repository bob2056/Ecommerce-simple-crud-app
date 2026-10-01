export const TableRowSkeleton = ({rows, cols}: Readonly<{rows: number, cols: number}>) => {
  return (
      [...Array(rows)].map((_, i: number) => {
        return <tr key={`rows-${i}`}>
            
            {[...Array(cols)].map((_, y:number) => {
              return (
                <td key={`cols-${y}`} className="p-3 border border-gray-800">
                  <p className="w-full h-2 rounded-full bg-gray-400 animate-pulse"></p>
                </td>
              );
            })}
          </tr>
      })
  );
}