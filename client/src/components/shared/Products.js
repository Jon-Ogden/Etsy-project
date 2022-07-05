import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Select } from "semantic-ui-react"
import { Title } from "../styled-components/Fonts"
import ProductCard from "./ProductCard"
import axios from "axios"

export default function Buyers(){
    const {products, sellers} = useContext(AuthContext)
    const categories = products.map(c => c.category)
    const uniquecats = [...new Set(categories)]
    const catsObj = uniquecats.map((c) => {return{key: c, text: c, value: c}})
    const [category, setCategory] = useState('All')
    const [catProducts, setCatProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const getSellerName = (id) => {
        let seller = sellers.filter(c => c.id == id)
        return seller[0].name
    }

    const handleChange = async (e, { value }) => {
        let res = await axios.get(`api/products/${value}`);
        setCatProducts(res.data.products)
        setCategory(value)
        setPage(1)
        setTotalPages(res.data.total_pages)
    }

    const renderProducts = () =>{
        return catProducts.map((c) => {
            return <ProductCard
            key={c.id}
            id={c.id}
            sellerName={getSellerName(c.seller_id)}
            price={c.price}
            category={c.category}
            description={c.description} />
        })
    }

    const getStyle = (num)=>{
        const sharedStyles = {marginLeft:'10px'}
        if(num === page){
          return {...sharedStyles, color:'red'}
        }
        return sharedStyles
      }

    const pageClicked = async (pageNum)=>{
        try {
          let res = await axios.get(`/api/products/${category}?page=${pageNum}`);
          setPage(pageNum)
          setCatProducts(res.data.products);
        } catch (err) {
          alert(err);
        }
      }

    const renderPagination = ()=>{
        let paginationMenu = []
        for( let i = 1; i<= totalPages; i++) {
          paginationMenu.push(<span style={getStyle(i)} onClick={()=> pageClicked(i)}>{i}</span>)
        }
    
        return paginationMenu
      }

    return(
        <div>
            <Select
                onChange={handleChange}
                placeholder="Select Category"
                options={catsObj}
            />
            {renderPagination()}
            <Title type="t2">Products</Title>
            {renderProducts()}
        </div>
    )
}