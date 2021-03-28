import React from "react";

export const All = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>SM</th>
          <th>MD</th>
          <th>LG</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button className="btn btn-primary btn-sm">Primary</button>
          </td>
          <td>
            <button className="btn btn-primary btn-md">Primary</button>
          </td>
          <td>
            <button className="btn btn-primary btn-lg">Primary</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-secondary btn-sm">Secondary</button>
          </td>
          <td>
            <button className="btn btn-secondary btn-md">Secondary</button>
          </td>
          <td>
            <button className="btn btn-secondary btn-lg">Secondary</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Story = {
  title: "L1/Buttons",
};

export default Story;
