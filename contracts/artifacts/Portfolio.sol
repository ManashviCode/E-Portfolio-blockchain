// SPDX-License-Identifier: GPL-3.0
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
  string public resumeLinks="Qme7xVCaRnwUcBVHyaKhsGsG4QFog2SDMN3fHLWCTvwAKz";
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

  function insertEducation(string calldata _data, string calldata _degree, string calldata _knowledgeAcquired, string calldata _instutionName) external onlyAuthority{

  }

  function changeEducation (string calldata _date,string calldata _degree,string calldata _knowledgeAcquired,string calldata _instutionName,uint _educationDetailCount) external onlyAuthority{
  
  }

  function allEducationDetails() external view returns(Education[3] memory){

  }

  function changeDescription(string calldata _description) external onlyAuthority{

  }

  function changeResumeLink(string calldata _resumeLink) external onlyAuthority{

  }

  function changeImageLink(string calldata _imageLink) external onlyAuthority{

  }

  function donate() public payable {

  }

}