import Image from 'next/image';
import data from '../data/managementSection.json';

const Management = () => {
    return (
        <section className="management">
            <div className="container-management">
                <div className="content-management">
                    {data.blocks.map(managment =>
                        <div className="item" key={managment.id}>
                            <div className="right-side">
                                <h3>{managment.title}</h3><br></br>
                                <h41>{managment.description11}</h41><br></br>
                                <p1>{managment.description111}</p1>
                                <h4>{managment.description}</h4>
                                <p>{managment.description1}</p>
                                <button>Try it</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Management;