const Events = () => {
    const handleMyEvent = (i) => {
        console.log("Ativou o evento " + i);
    }

    return (
        <div>
            <button onClick={handleMyEvent(3)}>Clique Aqui</button>
        </div>
    );
};

export default Events;