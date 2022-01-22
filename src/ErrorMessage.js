export default function ErrorMessage({ message }) {
    if (!message) return null;
  
    return (
      <div className="alert">
        <div className="">
          <label>{message}</label>
        </div>
      </div>
    );
  }
  