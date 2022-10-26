
export default function Content({ titulo, imagem }) {
  return (
    <div className="posts">
      <div className="post">
        <h1 className="titulo">{titulo}</h1>
        <img src={imagem} alt="Hyperlink" />
      </div>
    </div>
  );
}
