import React from 'react'
import Content from './Content'
import Category from './Category'
import Account from './Account'
import { useState } from 'react'

const Wrapper = ({isIncome}) => {
    const [isAcc, setIsAcc] = useState(false)
    const [isCat, setIsCat] = useState(false)
    const [catItem, setCatItem] = useState('')
    const [accItem, setAccItem] = useState('')
    const [categoryData, setCategoryData] = useState([
        'food',
        'movie',
        'travel',
        'rent',
        'shopping',
        'hospital',
        'fees',
        'other',
    ])
     const [categoryDatain, setCategoryDatain] = useState([
        'allowance',
        'salary',
        'petty cash',
        'bonus',
        'other',
     ])

    return (
            <div className="flex justify-between">
                <Content 
                    setIsAcc={setIsAcc}
                    setIsCat={setIsCat}
                    catItem={catItem}
                    accItem={accItem}
                    setCatItem={setCatItem}
                    setAccItem={setAccItem}
                    isIncome={isIncome}
                />
                
                {isCat && (
                <Category 
                    setCatItem={setCatItem}
                    setIsCat={setIsCat}
                    categoryData={categoryData}
                    setCategoryData={setCategoryData}
                    isIncome={isIncome}

                    categoryDatain={categoryDatain}
                    setCategoryDatain={setCategoryDatain}
                />
                )}
                {isAcc && ( 
                <Account 
                    setAccItem={setAccItem}
                    setIsAcc={setIsAcc}
                />
            )}
            </div>
    )
}

export default Wrapper