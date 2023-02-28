function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt={props.name} />
      <h3 className="card-name">{props.name}</h3>
      <p className="card-desc">{props.description}</p>
      <a target={'_blank'} href={props.link}>
        <button className="card-link">View Menu</button>
      </a>
    </div>
  );
}

export default Card;
