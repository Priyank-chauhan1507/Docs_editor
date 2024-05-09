import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";


const App = () => {


  const [name, setName] = useState("{jurisdiction name}")
  const [surname, setSurname] = useState("{surname}")
  const [aaddress, setAaddress] = useState("{complainant_address}")
  const [caddress, setCaddress] = useState("{accused_address}")


  const valu = `IN THE COURT OF ${name} <br> COMPLAINT CASE NO. ____ 20XX <br> UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT <br> <br> <br>  BETWEEN <br> Mr. Vinod ${surname}, <br> Resident of ${caddress} <br><br> COMPLAINANT <br><br> AND <br><br> MR. Kishore <br> Resident of ${aaddress} <br><br>ACCUSED`;
  // const [ivalue, setivalue] = useState(valu)
  const [value, setValue] = useState(valu);

  useEffect(() => {
    setValue(value)
    console.log(value)
    if(name.length == 0){
      setName("{jurisdiction name}")
    }
    if(surname.length == 0){
      setSurname("{surname}")
    }
    if(aaddress.length == 0){
      setAaddress("{accused_address}")
    }
    if(caddress.length == 0){
      setCaddress("{complainant_address}")
    }
  }, [name, surname, aaddress, caddress, value])



  const handleChange1 = (e) => {
    setName(e.target.value);
  };
  const handleChange2 = (e) => {
    setSurname(e.target.value);
  };
  const handleChange3 = (e) => {
    setCaddress(e.target.value);
  };
  const handleChange4 = (e) => {
    setAaddress(e.target.value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "64%" }}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />{" "}
        </div>
        <div
          className="semimainPopUp"
          style={{
            background: "white",
            padding: "10px",
            // border: "1px solid black",
          }}
        >
          <div className="headingPopUp">Fill Details</div>
          <div>
            <div className="rulerPopup"></div>

            <input
              type="text"
              name="name"
              placeholder="Jurisdiction Name"
              // value={name}
              onChange={(e) => {
                handleChange1(e);
              }}
              className="PopUpMerch"
            />
            <input
              type="text"
              name="surname"
              // value={surname}
              onChange={(e) => {
                handleChange2(e);
              }}
              placeholder="Surname"
              className="PopUpMerch"
            />
            <input
              type="text"
              name="caddress"
              placeholder="Complainant Address"
              // value={caddress}
              onChange={(e) => {
                handleChange3(e);
              }}
              className="PopUpMerch"
            />

            <input
              type="text"
              name="aaddress"
              placeholder="Accused Address"
              // value={aaddress}
              onChange={(e) => {
                handleChange4(e);
              }}
              className="PopUpMerch"
            />

            {/* <div className="btnPopUp">
              <button className="cancelPopUp" onClick={() => {}}>
                Cancel
              </button>
              <button className="PayNowPopUp" onClick={() => {}}>
                Pay Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
