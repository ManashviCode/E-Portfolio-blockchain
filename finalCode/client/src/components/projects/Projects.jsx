/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap";
import "./Projects.css";

const Projects = ({ state }) => {
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const { contract } = state;
        const projectDetails = async () => {
            if (contract) {
                try {
                    const projects = await contract.methods.allProjects().call();
                    console.log(projects);
                    setProjects(projects);
                } catch (error) {
                    console.error("Error fetching projects:", error);
                }
            }
        };
        projectDetails();
    }, [state]);

    const donateEth = async (event) => {
        event.preventDefault();
        try {
            // eslint-disable-next-line react/prop-types
            const { contract, web3 } = state;
            const eth = document.querySelector("#eth").value;
            // eslint-disable-next-line react/prop-types
            const weiValue = web3.utils.toWei(eth, "ether");
            const accounts = await web3.eth.getAccounts();
            await contract.methods.donate().send({ from: accounts[0], value: weiValue, gas: 480000 });
            alert("Transaction Successful");
        } catch (error) {
            alert("Transaction is Not Successful");
        }
    };

    return (
        <section className="project-section">
            <h1 className="title">Projects</h1>
            <div className="card-wrapper">
                {projects.length > 0 && projects.map((project, index) => {
                    const githubLink = `https://github.com/ManashviCode/${project.githubLink || ''}`;
                    return (
                        <a key={index} href={githubLink} className="project-card" target='_blank' rel="noopener noreferrer">
                            <div className="card-img">
                                <img src={`https://gateway.pinata.cloud/ipfs/${project.image || ''}`} alt={project.name || "Project"} />
                            </div>
                            <div className="card-text">
                                <h3>{project.name || "Unnamed Project"}</h3>
                                <p>{project.description || "No description available."}</p>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/*  =========popup bootstrap==========  */}
            <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Enter the ETH you want to donate!
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={donateEth}>
                        <Row>
                            <input id="eth" type="text" placeholder="ETH amount" />
                            <Button className='mt-4' type="submit">
                                Send
                            </Button>
                        </Row>
                    </form>
                </ModalBody>
            </Modal>
            {/*  =========popup bootstrap end==========  */}

            <p className='donate' onClick={() => setModal(true)}>
                Liked the projects? Consider donating ETH <FaDonate className='icon' />
            </p>
        </section>
    );
};

export default Projects;
