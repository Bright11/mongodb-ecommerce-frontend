import { useEffect, useState } from "react";
import "./addproduct.css";
import Adinsidbar from "./Adinsidbar";
import axios from "../../axios"
import { useCreateproductMutation } from "../../services/appApi";
import { useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux';
//import { allcategory } from "../../features/categorySlice";

function Addproduct({ adminnav }) {
  adminnav(true)
  const [images, setImages] = useState([])
  const [rimages, setRimages] = useState(null);
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState("")

  const [producslug, setProducslug] = useState("")
  
  const [itemerror, setItemsrror] = useState("")
  const [createproduct, { isError, error, isLoading, isSuccess }] =
    useCreateproductMutation();
  const navigate = useNavigate()
  
  const [allcat, setAllcat] = useState([]);
//getting categories
  useEffect(() => {
    axios.get("/category").then((getcat)=>{
    setAllcat(getcat.data)

    })
  }, [allcat]);
  //the end
   //setProducslug(name);
  const handleproduct = (e) => {
    e.preventDefault();

   // if (!name || !price || !category || !description || !images.length) {
    if (!name || !price || !category || !description || !images.length) {
      setItemsrror("All forms must be file");
    } //categoryid
    createproduct({
      name,
      description,
      price,
      category,
      images,
    }).then(({ data }) => {
      if (data.length > 0) {
        setTimeout(() => {
          navigate("/seepro");
        }, 1500);
      }
    });
  }
  const deleteimage = (imgObj) => {
  console.log("hi")
    setRimages(imgObj.public_id);
    console.log("img", imgObj);
    axios.delete(`/deletimg/${imgObj.public_id}/`).then((res) => {
      setRimages(null);
      setImages((prev) =>
        prev.filter((img) => img.public_id !== imgObj.public_id)
      );
    });
  };
    const upload=()=>{
      const mywidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dqxmhjhnp",
          uploadPreset: "newapp",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            //console.log("Done! Here is the image info: ", result.info);
            setImages((prev) => [
              ...prev,
              {url:result.info.url,public_id:result.info.public_id},
            ])
          }
        }
      );
         mywidget.open();
  }
  
    return (
      <div className="addproduct">
        <div className="addproduct-content">
          <Adinsidbar />
          <div className="addpro_content">
            <form>
              {isSuccess && <p>Success</p>}
              <p>{itemerror}</p>
              <label>Product Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />
              <label>Product Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Product Price"
              />
              <label>Product Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {allcat.map((c) => (
                  // <option value={c.slug}>{c.name}</option>
                  <option value={c._id}>{c.name}</option>
                ))}
                {/* <option value="Food">Food</option>
                <option value="good">Good</option> */}
              </select>
              <label>Product Decription</label>
              <textarea
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <button className="addprobtn" type="button" onClick={upload}>
                Upload
              </button>
              <button className="addprobtn" onClick={handleproduct}>
                Add Product
              </button>
            </form>
          </div>
        </div>
        <div className="displayimg">
          <h1>Preview images</h1>
          <div className="myimgpreviw">
            {images.map((image) => (
              <>
                <div className="previewimage">
                  <img src={image.url} alt="cloud" />

                  <p className="deleteimg" onClick={() => deleteimage(image)}>
                    Delete
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Addproduct