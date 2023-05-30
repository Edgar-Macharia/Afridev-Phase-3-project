import React from 'react'

function Home() {
  return (
    <div className='text-center mt-3 bg-light'>
       <div class="row mx- gx-5 ">
          <div class="col-7">
            <div class="p-3">
              <h1>Find and Hire <br/>Top Talent</h1>
              <p>Hire freelancers or permanent staff from our talent pool to work remotely or on-site.</p>
              <br/>
              <div>
              <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col ">
              <div class="card h-100 border-success">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 border-success">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 border-success">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            </div>
                  
              </div>
            </div>
          </div>
          <div class="col me-3 bg-light">
            <div class="p-3 ">
              <img className='container-fluid '
              src='https://prepinsta.com/wp-content/uploads/2021/05/HackerRank-Advance-Coding-Questions.webp' alt='developer'/>
              </div>
          </div>
    </div>

    </div>
  )
}

export default Home