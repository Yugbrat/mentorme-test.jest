process.env.NODE_ENV = "test";

var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");

const { getUserByEmail } = require("../routes/users");
const should = chai.should();
chai.use(chaiHttp);

//for registration (User)
describe("/POST user", () => {
  it("it should register the user info", (done) => {
    const user = {
      fullName: "yugbrat",
      address: "ktm",
      contactNumber: "9808948000",
      email: "yugbrat@gmail.com",
      gender: "Male",
      userType: "user",
      password: "yugbrat1234",
      
    };
    chai
      .request(app)
      .post("/api/v1/users/users")
      .send(user)
      .end((err, res) => {
        res.body.should.be.a("object");
        done();
      });
  });
});

//for registration (Mentor)
describe("/POST user", () => {
  it("it should register the user info", (done) => {
    const user = {
      fullName: "Suraj Vaidya",
      address: "ktm",
      contactNumber: "9876543211",
      email: "suraj@gmail.com",
      gender: "Male",
      userType: "mentor",
      password: "suraj1234",
      
    };
    chai
      .request(app)
      .post("/api/v1/users/users")
      .send(user)
      .end((err, res) => {
        res.body.should.be.a("object");
        done();
      });
  });
});

// //Login TDD
describe("/POST user", () => {
  it("it should post the Login info", (done) => {
    const user = {
      email: " admin@gmail.com",
      password: "admin1234",
    };
    chai
      .request(app)
      .post("/api/v1/users/signin")
      .send(user)
      .end((err, res) => {
        res.body.should.be.a("object");
        //res.body.should.have.property('message');
        done();
      });
  });
});


// //User registration approve TDD
describe("/GET Unapproved", () => {
  it("it should Get all unapproved list of users", (done) => {
    chai
      .request(app)
      .get("/api/v1/users/approve")
      .end((err, res) => {
        //  res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

// //user registration approval
describe("/PUT/:id user", () => {
  it("should  update the unapproved user status", (done) => {
    const user = {
      verified: 1,
    };
    const userId = 2;
    chai
      .request(app)
      .put("/api/v1/users/approve" + userId)
      .send(user)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        done();
      });
  });
});


 

// // for MentorList TDD
// // for getall Mentors list
describe("Mentor",function(){
  describe("/GET Get Mentor", () => {
    it("it should get the list of mentors, provided token is authorized", (done) => {
      chai
        .request(app)
        .get("/api/v1/Mentors")
        .set("Authorization",Token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  });
  
// // for MentorID TDD
// // for deleting Mentor
describe("Mentor",function(){
  describe("/DELETE  Mentor", () => {
    it("it should Delete the mentorprofile, Mentor id and provided token is authorized", (done) => {
      const subjects = {
        MentorName: "Suraj Vaidya"
      };
      var id= 1;
      chai
        .request(app)
        .delete("/api/v1/Mentors/"+id)
        .set("Authorization",Token)
        .end((err, res) => {
          res.should.have.status(204);
          res.body.should.have.property("message").eql("Mentor Deleted successfully!");
          done();
        });
    });
  });
  });


  

//   //////////////////
//   // for Ratings TDD
// // for add ratings
describe("Mentor Class",function(){
  describe("/POST Add Ratings for Mentor", () => {
    it("it should add the Rating for Mentor, provided token is authorized", (done) => {
      const Mentors = {
        MentorId:1,
        
      };
      chai
        .request(app)
        .post("/api/v1/Mentor")
        .set("Authorization",Token)
        .send(Ratings)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property("message").eql("Ratings added for Mentor");
          done();
        });
    });
  });
  });

  

  

const Token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJzdWphbkBnbWFpbC5jb20iLCJpYXQiOjE1OTUxNDM5NDV9.TwradLndCqPMaLhMmWStAiG-uQXf9JVbdCTyOOvce_o'
//for add class

describe("/Add SkillCateogory", () => {

  it("it should skillcateogory of mentor if token provided", (done) => {
    const Mentor = {
      Mentorid: '1',
    };
    
    chai
      .request(app)
      .post("/api/v1/Skillcateogory")
      .set("Authorization",Token)
      .send(classes)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});


//Hire Mentor

  describe("/Hire Mentor ", () => {
    it("it should Hire Mentor to a student, provided token is authorized ", (done) => {

      var id=2
      chai
        .request(app)
        .get("/api/v1/hire/"+id)
        .set("Authorization",Token)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  //get mentors hired

  describe("/GET Get All hired mentor  list", () => {
    it("it should get the list of mentors hired, provided token is authorized", (done) => {
      chai
        .request(app)
        .get("/api/v1/hire")
        .set("Authorization",Token)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  // // for Search Mentor

describe("Search",function(){
  describe("/GET  search", () => {
    it("it should search the mentor, mentor id and provided token is authorized", (done) => {
      const searchs = {
        name: "Suraj Vaidya"
      };
     
      chai
        .request(app)
        .get("/api/v1/search")
           .send (searchs)
        .set("Authorization",Token)
        .end((err, res) => {
          res.should.have.status(200);
          
          done();
        });
    });
  });
  });


//for profile image upload
describe("/PUT/:id upload", () => {
  it(" it should  upload the profile image", (done) => {
    const image = {
      image: "myImage-1593414475992.png",
    };
    const noticeId = 2;
    chai
      .request(app)
      .patch("/api/v1/notice/" + noticeId)
      .set("Authorization", Token)
      .send(image)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});


//for profile image Update
describe("/PUT/:id upload", () => {
  it(" it should  update new profile image", (done) => {
    const image = {
      image: "myImage-1593414475993.png",
    };
    const imageId = 3;
    chai
      .request(app)
      .patch("/api/v1/upload/" + imageId)
      .set("Authorization", Token)
      .send(image)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});


//for user Update
describe("/PUT/:id user", () => {
  it(" it should  update the user info", (done) => {
    const user = {
      fullName: "Aashma Bhatt",
      address: "ktm",
      contactNumber: "980123123",
      email: "aashma@gmail.com",
      gender: "female",
      userType: "Student",
      password: "aashma1234",
      
    };
    const userId = 3;
    chai
      .request(app)
      .put("/api/v1/users/" + userId)
      .set("Authorization", Token)
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
