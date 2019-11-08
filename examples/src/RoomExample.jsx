import React from 'react';
// import Room from '../';

export default function RoomExample() {
  // const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)

  return (
    <div>
      <p>
        <label htmlFor="hideSourceOnDrag">
          <input id="hideSourceOnDrag" type="checkbox" />
          <small>Hide the source item while dragging</small>
        </label>
      </p>
    </div>
  );
}
