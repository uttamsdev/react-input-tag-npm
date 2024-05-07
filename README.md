# React Input Tag Field
## Overview

This is a react input tag npm package. It is easy to use, responsive and features enriched. 

## Demo

[Demo -> Click here](https://663a840ea2f9e6590718be40--beamish-elf-039a77.netlify.app/)

## Features

- Add new tags by pressing Enter or typing a comma `,`.
- Remove tags by clicking the "x" icon next to each tag.
- Edit tags by clicking on the tag and modifying the text.
- Automatically adjusts the layout to accommodate new tags.
- Responsive

## Installation

   ```bash
   npm i react-input-tag-field
   ```

## Usage
You have to pass an useState to get data. You'll get data into "tags". 

```bash
import ReactTagInput from "react-input-tag-field";

function App() {
  const [tags, setTags] = useState([]);
  return (
    <div>
      <ReactTagInput tags={tags} setTags={setTags} />
    </div>
  );
}
```