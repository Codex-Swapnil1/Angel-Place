import React from 'react'

import style_f from "../CSS/FooterPage.module.css"
import bigstorlittleones from "../imges/bigstorlittleones.jpg"
import staricon from "../imges/staricon.jpg"
import hourse from "../imges/hourse.jpg"
import laugh from "../imges/laugh.jpg"
import recycle from "../imges/recycle.jpg"
import shiping from "../imges/shiping.jpg"
import frenchisestore from "../imges/frenchisestore.jpg"

import {AiFillFacebook} from "react-icons/ai"

import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
const FooterPage = () => {
  return (
   <>
         <div className={style_f.mainContainer}>

               {/* <div className={style_f.top_whitediv}>

               </div> */}

               <div className={style_f.topF}>

                    {/* icon div text */}
                   <div className={style_f.icondiv}>

                        <div className={style_f.icon_title}>
                          <img src={staricon} alt="not found" />
                          <span>
                          2 Lakhs +
                          <br />
                        Unique Products
                          </span>
                        </div>
                        <div className={style_f.icon_title}>
                        <img src={hourse} alt="not found" />
                          <span>
                          5800 Brands
                          </span>
                        </div>
                        <div className={style_f.icon_title}>
                        <img src={laugh} alt="not found" />
                          <span>
                          7.5 Million
                          <br />
                          Registered Users
                          </span>
                        </div>
                        <div className={style_f.icon_title}>
                        <img src={recycle} alt="not found" />
                        <span>
                          Easy Return, Replacement
                          <br />
                          & Exchange Policy
                          </span>
                        </div>
                        <div className={style_f.icon_title}>
                        <img src={shiping} alt="not found" />
                          <span>
                          Free Shipping Available
                          <br />
                          above ₹ 699*
                          </span>
                        </div>
                   </div>


                  <div className={style_f.leftRightdivContainer}>

                  <div className={style_f.left} >

                  <div className={style_f.category1}>

                          <span>CATEGORIES</span>
                           <hr className={style_f.hr1} />
                         <p>Clothing & Fashion</p>
                         <p>Toys</p>
                         <p>Books & CDs</p>
                         <p>School Supplies</p>
                         <p>Birthday Party Supplies</p>
                         <p>Baby Diapering</p>
                         <p>Feeding & Nursing</p>
                         <p>Bath & Skin Care</p>
                         <p>Health & Safety</p>
                         <p>Baby Gear</p>
                         <p>Nursery</p>
                         <p>Moms & Maternity</p>
                         <p>Gifts</p>
                         <p>Preschool Admissions</p>

                         <span>COMPANY INFO</span>
                         <hr className={style_f.hr1} />

                         <p>About Us</p>
                         <p>Contact Us</p>
                         <p>Brands</p>
                         <p>F.A.Q.s</p>
                         <p>FirstCry Stores & Playschool</p>

                     </div>
                     <div className={style_f.category2}>

                          <span>FIRSTCRY PARENTING</span>
                          <hr className={style_f.hr1} />

                          <p>Getting Pregnant</p>
                          <p>Pregnancy</p>
                          <p>Baby</p>
                          <p>Toddler</p>
                          <p>Preschooler</p>
                          <p>Big Kid</p>
                          <p>Vaccination</p>
                          <p>Growth Tracker</p>
                          <p>Baby Names</p>
                          <p>FirstCry Parenting YouTube</p>
                          <p>Coloring Pages</p>
                         <span>REGIONAL PARENTING</span>
                         <hr className={style_f.hr1} />

                          <p>FirstCry Hindi Parenting</p>
                          <p>FirstCry Marathi Parenting</p>
                          <p>FirstCry Bangla Parenting</p>
                          <p>FirstCry Arabia Parenting</p>
                          <p>FirstCry UAE Parenting</p>


                     </div>
                     <div className={style_f.category3}>
                     <span>SHIPPING & POLICIES</span>
                     <hr className={style_f.hr1} />
                     <p>Payments</p>
                     <p>Shipping Policy</p>
                     <p>Return & Replacement Policy</p>
                     <p>Cancellation Policy</p>
                     <p>Terms of Use</p>
                     <p>Privacy Policy</p>
                     <p>Next day & Same day delivery</p>
                     <p>Responsible Disclosure</p>

                   <span> PAYMENT METHOD</span>
                   <hr className={style_f.hr1} />
                     <p>Credit Cards</p>
                     <p>Net Banking</p>
                     <p>ATM & Debit Cards</p>
                     <p>COD(Cash on Delivery)</p>
                     <p>Easy EMI</p>

                     <span> CONNECT WITH US</span>
                     <hr className={style_f.hr1} />
                     <div className={style_f.socialmediadiv}>
                     <AiFillFacebook/>
                     <AiFillInstagram/>
                     <AiFillTwitterSquare/>
                     <BsYoutube/>
                     <AiFillLinkedin/>
                     </div>
                     <p>Testimonials</p>
                     <p>SITEMAP</p>
                     <p>LOYALTY CASH</p>

                     </div>
                     <div className={style_f.category4}>
                     <span>OUR APPS</span>
                     <hr className={style_f.hr1} />
                           <p>FirstCry India: Shopping & Parenting</p>
                           <p>FirstCry India: Shopping & Parenting iOS</p>

                           <span>SHOP INTERNATIONAL</span>
                                <hr />
                           <p>FirstCry UAE</p>
                           <p>FirstCry UAE: Shopping & Parenting</p>
                           <p>FirstCry UAE: Shopping & Parenting iOS</p>
                           <span>KIDS LEARNING & EDUCATIONAL APPS</span>
                                <hr />
                           <p>PlayBees: Kids Learning & Education App</p>
                           <p>PlayBees: 123 Kids Numbers App</p>
                           <p>PlayBees: ABC for Kids</p>
                           <span>CAREER AT FIRSTCRY.COM</span>

                           <p>Current Openings at FirstCry.com</p>



                     </div>


                  </div>
                  <div className={style_f.right} >

                      <img src={frenchisestore} alt="" />

                      <img src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp" alt="" />

                </div>

               </div>



               </div>

               {/* botom */}
               <hr  className={style_f.hr}/>

               <div className={style_f.botomF}>

                     <div className={style_f.toptext}>
                       {/* first  */}
                       <p>FirstCry Baby & Kids Products Online Store
                        <br />

                        Explore kids and baby products galore at FirstCry.com, the Big Store for Little Ones. We at FirstCry.com empathize with you as a mother who always aspires to bestow her newborn, infant, baby or kid with the best things even for their smallest needs. That is why, 'Mommy Knows Best'.

                        <br />
                        From breastfeeding to bathing essentials, right furniture to myriad baby care products, a mother needs them all for her lil' one. This inspires us to offer convenient & hassle-free online shopping not just for babies & kids but for moms-to-be & new moms as well.
                       </p>

                       {/* second */}
                       <p>
                       With 2 Lakh Baby & Kids Products, 2 Million Happy Customers, and 2 Thousand+ top-notch national and international brands like Babyhug, Chicco, Graco, BSA, Johnson & Johnson, Huggies, Pampers, Medela, Pigeon, Mothercare, Fisher-Price, FunSkool, Lego, Disney, Barbie and
                       <br />

                       more you can look forward to an unparalleled shopping experience with us. Shop for baby & kids products online ranging across diapering, feeding & nursing, skin & health care, baby & kids toys, newborn & infant clothing, baby clothes, kids wear, footwear, fashion accessories, baby
                       <br />
                       gear, nursery, kids furniture, gifts, party supplies, books & CDs, school supplies and more at great discounts.
                       </p>

                       <p>
                       With the FirstCry mobile app, now you can shop on the go! Download the FirstCry Android and the iOS app and Voila!
                       </p>

                     </div>

                     <div className={style_f.botomtext}>

                        <p>
                        Newborn & Baby Products Online Shopping in India
                        <br />
                        Along with all your affection and attention, your little bundle of joy deserves the best when it comes to newborn & baby items. Pamper your lil' one with the widest range of newborn & baby products: right from diapers to potty chairs, onesies to party wear, booties to clogs, carry-cots to
                        <br />
                        baby walkers, rattles to learning toys, FirstCry has it all! FirstCry newborn baby shopping checklist.
                        </p>
                        <p>
                        Online Shopping for Kids at FirstCry.com
                        <br />
                        Shopping for your kid is no child's play and thus we help you explore, choose and buy from an exhaustive & finest collection of kids' products. FirstCry buying guides, premium store, boutiques, products checklist, and look-books are all aimed towards an enriching and a fulfilling
                        <br />
                        shopping experience. That's what makes us your go-to online store for kids shopping.
                        </p>
                        <p>
                        FirstCry Offers
                        <br />
                        Satisfaction and Savings come guaranteed with irresistible FirstCry offers & deals on a range of high quality products. These are including but not limited to the FirstCry shopping carnivals, loyalty cash program, app offers, bank & wallet offers, Free @ Three, cashback, Guaranteed
                        <br />
                        savings offers & more.
                        <br />
                        To start with, why not grab some great discounts with the FirstCry coupons and buy baby & kids products online from anywhere in India with Free Shipping, Cash On Delivery (COD), Same & Next day delivery & EZ returns options. Happy Shopping!
                        </p>
                        <p>
                        © 2010-2022  www.FirstCry.com. All rights reserved. This website can be best viewed in resolution width of 1024 and above.
                        </p>


                     </div>


               </div>


         </div>





   </>
  )
}

export default FooterPage