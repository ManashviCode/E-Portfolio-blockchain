// SPDX-License-Identifier: GPL-3.0

//https://github.com/ManashviCode/E-Portfolio-blockchain
//https://github.com/kshitijofficial/Decentralize-Portfolio/blob/main/Portfolio.sol


//Dates- 10/01/2016-29/12/2017, 20/01/2018-25/12/2019, 17/04/2021-30/09/2024  
//degree- intemediate level, high school, University
//knowledge- Information technology, physical stream, Computer Engineering
//Institue - NGC , RBV, UOJ


pragma solidity >=0.7.0 <0.9.0;

contract Portfolio{
 
  struct Project{
      uint id;
      string name;
      string description;
      string image;
      string githubLink;
  }

  struct Education{
      uint id;
      string date;
      string degree;
      string knowledgeAcquired;
      string instutionName;
  }

  Project[3] public projects;
  Education[3] public educationDetails;
  address portfolioAuthority;

  string public imageLink="QmNVn57VNAzG1GURePB8TFJCb6p2L5Jzs69musbpU3tNXU";
  string public description="over 1 months of practical experience with a good knowledge in blockchain";
  string public resumeLink="Qme7xVCaRnwUcBVHyaKhsGsG4QFog2SDMN3fHLWCTvwAKz";
  uint projectCount;//initially it will zero
  uint educationCount;

  //decide who is deploying your smart contract
  constructor(){
    portfolioAuthority=msg.sender;
  }

 //not access unathorized parties.
  modifier onlyAuthority(){
    require(portfolioAuthority==msg.sender,"You do not have an authority over this contract");
    _;
  }

  function insertProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink) external onlyAuthority {
        require(projectCount<3,"Not more than 3 projects");
         projects[projectCount] = Project(projectCount,_name,_description,_image,_githubLink);
        projectCount++;
  }

 function changeProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink, uint _projectCount) external onlyAuthority {
     require(_projectCount>=0 && _projectCount<3,"Invalid ProjectCount");
      projects[_projectCount] = Project(_projectCount,_name,_description,_image,_githubLink);

  }

  function allProjects() external view returns (Project[3] memory)  {
      return projects;
  }

  function insertEducation(string calldata _date, string calldata _degree, string calldata _knowledgeAcquired, string calldata _instutionName) external onlyAuthority{
    require(educationCount<3,"Only 3 education details allowed");
     educationDetails[educationCount]=Education(educationCount,_date,_degree,_knowledgeAcquired,_instutionName);
     educationCount++;
  }

  function changeEducation (string calldata _date,string calldata _degree,string calldata _knowledgeAcquired,string calldata _instutionName,uint _educationDetailCount) external onlyAuthority{
   require(_educationDetailCount>=0 && _educationDetailCount<3,"Invalid educationCount");
      educationDetails[_educationDetailCount]=Education(_educationDetailCount,_date,_degree,_knowledgeAcquired,_instutionName);
  
  }

  function allEducationDetails() external view returns(Education[3] memory){
 return educationDetails;
  }

  function changeDescription(string calldata _description) external onlyAuthority{
description=_description;
  }

  function changeResumeLink(string calldata _resumeLink) external onlyAuthority{
 resumeLink=_resumeLink;
  }

  function changeImageLink(string calldata _imageLink) external onlyAuthority{
  imageLink=_imageLink;
  }

  function donate() public payable {
payable(portfolioAuthority).transfer(msg.value);
  }

}