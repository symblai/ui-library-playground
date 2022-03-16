/* eslint-disable max-len */
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      Go to
      {' '}
      <code>storybook</code>
      {' '}
      OR run ```npm run storybook```  in CLI.

    </div>

  // Uncomment the below code &import the components from ./components to see the example UI,

  //     <div className="App">
  //       <div className='row'>
  //         <Chip />

  //         <Chip text="Hello there" type="basic" isSelectable={true} />

  //         <Chip text="Hello there" type="initial" />
  //         <Chip text="Hello there" type="initial" isSelectable={true} />
  //         <Chip text="Hello there" type="initial" disabled />
  //       </div>
  //       <div className='row'>

  //         <Chip text="Hell" type="profile" imgSrc="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png" />
  //         <Chip text="Hell" type="profile" imgSrc="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png" isSelectable={true} />
  //         <Chip text="Hell" type="profile" imgSrc="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png" disabled />

  //         <Chip text="Hello" type="emoji" emoji="📌" />
  //         <Chip text="Hello" type="emoji" emoji="📌" isSelectable={true} />
  //         <Chip text="Hello" type="emoji" emoji="📌" disabled />

  //         <Chip text="Hello" type="number" number={10} isSelectable={true} />
  //       </div>
  //       <div className="row">
  //         <Button label="Button" variant="contained" />

  //         <Button label="Button" variant="contained" endIcon={shareWhite} />

  //         <Button label="Button" variant="contained" startIcon={shareWhite} />

  //         <Button startIcon={shareWhite} variant="contained" />

  //         <Button label="Hello there" variant="contained" disabled />
  //       </div>

  //       <div className="row">
  //         <Button label="Tejasssss" />
  //         <Button label="Hello there" variant="outlined" />
  //         <Button label="Hello there" variant="outlined" startIcon={shareBlue} />
  //         <Button label="Hello there" variant="outlined" endIcon={shareBlue} />
  //         <Button variant="outlined" endIcon={shareBlue} />
  //         <Button label="Hello there" variant="outlined" disabled />
  //       </div>
  //       <div className="row">
  //         <Button label="Hello there" variant="default" />
  //         <Button label="Hello there" variant="default" startIcon={shareBlue} />
  //         <Button label="Hello there" variant="default" endIcon={shareBlue} />
  //         <Button variant="default" endIcon={shareBlue} />
  //         <Button label="Hello there" variant="default" disabled />
  //       </div>

  //       <div className="row">
  //         <Avatar backgroundColor="#FFEBEB" />
  //         <Avatar backgroundColor="#FFEBEB" textColor="#AD4C52" text="TE" />
  //         <Avatar textColor="#AD4C52" backgroundColor="#D2F3EF" text="UN" />
  //         <Avatar textColor="#ffffff" backgroundColor="#D2F3EF" text="UNES" />
  //         <Avatar textColor="" backgroundColor="#D2F3EF" text="Tejas Ladhani" />
  //         <Avatar src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png" />
  //       </div>
  //       <div className="row">
  //         <Avatar backgroundColor="#FFEBEB" contained={false} />
  //         <Avatar backgroundColor="#FFEBEB" />
  //         <Avatar backgroundColor="#FFEBEB" text="Hello" size="60px" />
  //         <Avatar backgroundColor="#FFEBEB" text="TE" contained={false} />
  //         <Avatar textColor="" backgroundColor="#D2F3EF" text="UN" contained={false} />
  //         <Avatar textColor="#278277" backgroundColor="#D2F3EF" text="UNES" contained={false} />
  //         <Avatar textColor="" backgroundColor="#D2F3EF" text="Tejas Ladhani" contained={false} />
  //         <Avatar src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png" contained={false} />
  //       </div>
  //       <div className='row'>
  //         <SearchInputField />
  //         <SearchInputField label={"Label"} description="Description to go here if any" />
  //       </div>

  //       <div className='row'>
  //         <SearchInputField isError={false} />
  //         <SearchInputField label={"Label"} description="Description to go here if any" isError={false} />
  //       </div>

  //       <div className='row'>
  //         <SearchInputField isError={true} />
  //         <SearchInputField label={"Label"} description="Description to go here if any" isError={true} />
  //       </div>
  //       <div className='row'>
  //         <SearchInputField isError={true} helperText={"This is helper text"} />
  //         <SearchInputField isError={true} helperText={"This is helper text"} label={"Label"} description="Description to go here if any" />
  //       </div>
  //       <div className='row'>
  //         <SearchInputField isError={false} helperText={"This is helper text"} />
  //         <SearchInputField isError={false} helperText={"This is helper text"} label={"Label"} description="Description to go here if any" />
  //       </div>
  //       <div className='row'>
  //         <SearchInputField disabled={true} />
  //         <SearchInputField disabled={true} label={"Label"} description="Description to go here if any" />
  //       </div>
  //       <div className="row">
  //         <Tab >
  //           <span>Hello from children</span>
  //         </Tab>
  //         <Tab isActive={true}>
  //           <span>Hello from children</span>
  //         </Tab>
  //         <Tab isActive={true} variant="default" />
  //         <Tab isActive={true} variant="default" disabled />
  //         <Tab isActive={false} variant="default" />
  //         <Tab isActive={true} variant="default" disabled />
  //       </div>
  //       <div className="row">
  //         <Tab isActive={true} variant="segment" />
  //         <Tab isActive={true} variant="segment" disabled />
  //         <Tab isActive={false} variant="segment" />
  //         <Tab isActive={true} variant="segment" disabled />
  //       </div>
  //       <div className="row">
  //         <Tab label="Active Tab" isActive={true} icon={shareBlue} variant="segment" />
  //         <Tab label="Active Tab" isActive={true} icon="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png" variant="segment" />
  //         <Tab label="Active Tab" isActive={false} variant="segment" />
  //         <Tab label="Active Tab" isActive={true} variant="segment" disabled />
  //       </div>
  //       <TabPane tabs={[{ label: "tab1", disabled: false }, { label: "tab2", disabled: true }, { label: "tab3", disabled: false }]} content={[content1, content2, content3]} />

  //       <TabPane tabs={[{ label: "tab1", disabled: false }, { label: "tab2", disabled: true }, { label: "tab3", disabled: false }]} content={[content1, content2, content3]} variant={"segment"} />

  //       <Dropdown label={"Tejas here"} options={["React", "Vue", "Angular"]} />

  //       <ListElement text="List here" number="10" />
  //       <ListElement />
  //       <ListElement isSelected={true} text="Hello there" />
  //       <ListElement isSelected={true} text="Hello there" number="100" />
  //       <Dropdown label={"Hellllllo"}>
  //         <ListElement text="List here" number="10" />
  //         <ListElement text="Hello there" />
  //         <ListElement isSelected={true} text="Hello there" number="100" />
  //       </Dropdown>
  //       <Card/>
  //       {/* <Card /> */}
  //       <HeaderTile
  //         img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F03%2F29%2F488574-shore-sand-water-Pacific_Ocean.jpg&f=1&nofb=1"
  //         title="🚀 Catch Up Meeting !"
  //       />

  //       <HeaderTile
  //         img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F03%2F29%2F488574-shore-sand-water-Pacific_Ocean.jpg&f=1&nofb=1"
  //         title="🚀 Catch Up Meeting !"
  //         speakers={[{
  //           name: 'Tejas',
  //           profilePic: 'https://s3-alpha-sig.figma.com/img/0b89/9e1a/fa06a93c37c24e48412a1707e7cb730e?Expires=1647820800&Signature=QWtP10C8AywNgSGafQxMOz8ZHC~uSUdNdVdWZ-RfhGPtYPBghLcEIyTb1YsNdYDX~J7uE1XDZuO~YRzMcdcvQWLht9oyjqv30exRWUhfvlGiYKhdU-8UkVRjlJavy4LqKbB6Bjy8ErCjmC9iBgg1gZOYJ7-qUhPa5VHf0wPuhFyvcKHMlVb6N6gmELFtF08Ue42ia01ILe9bDJWkeB~fBDB1faT6HvU2u0ykHLKU7iJqxRqVpv8ioIMpXh9Gn4UoP3-CREciq4EWTFluNmAGYbpZjUh7ukJaE8lNkbsepENtu86d7-dZzjlheySVKKeDeLTk5Y9ppxlqe6eVMawOVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  //         },
  //         {
  //           name: 'Sym',
  //           profilePic: 'https://s3-alpha-sig.figma.com/img/0b89/9e1a/fa06a93c37c24e48412a1707e7cb730e?Expires=1647820800&Signature=QWtP10C8AywNgSGafQxMOz8ZHC~uSUdNdVdWZ-RfhGPtYPBghLcEIyTb1YsNdYDX~J7uE1XDZuO~YRzMcdcvQWLht9oyjqv30exRWUhfvlGiYKhdU-8UkVRjlJavy4LqKbB6Bjy8ErCjmC9iBgg1gZOYJ7-qUhPa5VHf0wPuhFyvcKHMlVb6N6gmELFtF08Ue42ia01ILe9bDJWkeB~fBDB1faT6HvU2u0ykHLKU7iJqxRqVpv8ioIMpXh9Gn4UoP3-CREciq4EWTFluNmAGYbpZjUh7ukJaE8lNkbsepENtu86d7-dZzjlheySVKKeDeLTk5Y9ppxlqe6eVMawOVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  //         },
  //         {
  //           name: 'Rajshekhar',
  //           profilePic: 'https://s3-alpha-sig.figma.com/img/0b89/9e1a/fa06a93c37c24e48412a1707e7cb730e?Expires=1647820800&Signature=QWtP10C8AywNgSGafQxMOz8ZHC~uSUdNdVdWZ-RfhGPtYPBghLcEIyTb1YsNdYDX~J7uE1XDZuO~YRzMcdcvQWLht9oyjqv30exRWUhfvlGiYKhdU-8UkVRjlJavy4LqKbB6Bjy8ErCjmC9iBgg1gZOYJ7-qUhPa5VHf0wPuhFyvcKHMlVb6N6gmELFtF08Ue42ia01ILe9bDJWkeB~fBDB1faT6HvU2u0ykHLKU7iJqxRqVpv8ioIMpXh9Gn4UoP3-CREciq4EWTFluNmAGYbpZjUh7ukJaE8lNkbsepENtu86d7-dZzjlheySVKKeDeLTk5Y9ppxlqe6eVMawOVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  //         },
  //         ]}
  //       />

  //       <InsightsCard timeStamp="1:00" disabled />
  //       <TrackerCard id="12345" />
  //       <TrackerCard id="12345" selected />
  //       <TrackerCard
  //         id="12345"
  //         selected
  //         description={(
  //           <div>
  //             <span> Hello There </span>
  //             <li>This is a phrase.</li>
  //             <li>This is a phrase but little longer</li>

  //           </div>
  // )}
  //       />
  //     </div>
  );
}

export default App;
