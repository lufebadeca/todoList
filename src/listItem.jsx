function ListItem(props) {
    return (
      <div >
        <li>Item # {props.number}, {props.name}</li>
      </div>
    );
  }
  
  export default ListItem;