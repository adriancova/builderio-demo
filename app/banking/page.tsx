const Page = () => {
  return (
    <div className='bg-zinc-900 flex flex-col pt-12'>
      <div className='justify-between items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 self-center flex w-full max-w-[1596px] gap-5 px-9 py-5 rounded-[100px] border-solid max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:px-5'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/cf7726f7484d0a6122fa6cd728abcddf0979f8222119adbb0b67d35796a2eaa1?apiKey=8d891b24e36b4148b491c6131fe57140&'
          className='aspect-[3.9] object-contain object-center w-[156px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto'
        />
        <div className='items-start self-center flex justify-between gap-5 my-auto max-md:justify-center'>
          <div className='text-white text-lg leading-7 whitespace-nowrap items-stretch bg-neutral-800 self-stretch grow justify-center px-6 py-3 rounded-[82px] max-md:px-5'>
            Home
          </div>
          <div className='text-white text-lg leading-7 self-center my-auto'>
            Careers
          </div>
          <div className='text-white text-lg leading-7 self-center my-auto'>
            About
          </div>
          <div className='text-white text-lg leading-7 self-center grow whitespace-nowrap my-auto'>
            Security
          </div>
        </div>
        <div className='items-center flex justify-between gap-5'>
          <div className='text-white text-lg leading-7 my-auto'>Sign Up</div>
          <div className='text-zinc-900 text-lg leading-7 whitespace-nowrap items-stretch bg-lime-400 self-stretch grow justify-center px-8 py-3.5 rounded-[82px] max-md:px-5'>
            Login
          </div>
        </div>
      </div>
      <div className='items-center self-stretch flex w-full flex-col justify-center mt-14 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5'>
        <div className='w-full max-w-[1648px] my-12 max-md:max-w-full max-md:my-10'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0'>
              <div className='flex flex-col items-start max-md:max-w-full max-md:mt-10'>
                <div className='items-stretch bg-neutral-800 flex gap-1.5 pl-3 pr-5 py-2.5 rounded-[61px]'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/e10225789279d3cb3920daa457d102d394b691392fdbc80e78cf6600d16a47fb?apiKey=8d891b24e36b4148b491c6131fe57140&'
                    className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
                  />
                  <div className='text-white text-lg font-light leading-6 grow whitespace-nowrap'>
                    No LLC Required, No Credit Check.
                  </div>
                </div>
                <div className='self-stretch text-lime-400 text-5xl font-medium leading-[72px] mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]'>
                  <span className='text-white'>
                    Welcome to YourBank
                    <br />
                    Empowering Your{' '}
                  </span>
                  <span className='text-lime-400'>Financial Journey</span>
                </div>
                <div className='self-stretch text-zinc-200 text-lg font-light leading-7 mt-3.5 max-md:max-w-full'>
                  At YourBank, our mission is to provide comprehensive banking
                  solutions that empower individuals and businesses to achieve
                  their financial goals. We are committed to delivering
                  personalized and innovative services that prioritize our
                  customers' needs.
                </div>{' '}
                <div className='text-zinc-900 text-lg leading-7 whitespace-nowrap items-stretch bg-lime-400 justify-center mt-12 px-8 py-5 rounded-[82px] max-md:mt-10 max-md:px-5'>
                  Open Account
                </div>
              </div>
            </div>{' '}
            <div className='flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0'>
              <img
                loading='lazy'
                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e6e6b1-048b-460b-a442-584382cd2e4f?apiKey=8d891b24e36b4148b491c6131fe57140&'
                className='aspect-[1.13] object-contain object-center w-full items-start overflow-hidden grow max-md:max-w-full max-md:mt-10'
              />
            </div>
          </div>
        </div>
      </div>{' '}
      <div className='items-stretch self-center flex w-full max-w-[1596px] justify-between gap-5 mt-36 max-md:max-w-full max-md:flex-wrap max-md:mt-10'>
        <div className='items-stretch flex grow basis-[0%] flex-col px-5 max-md:max-w-full'>
          <div className='text-lime-400 text-5xl font-medium leading-[72px] whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[67px]'>
            <span className='text-white'>Our </span>
            <span className='text-lime-400'>Products</span>
          </div>{' '}
          <div className='text-zinc-400 text-lg font-light leading-7 mt-3.5 max-md:max-w-full'>
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </div>
        </div>{' '}
        <div className='items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex justify-between gap-5 mt-14 pl-3.5 pr-10 py-3.5 rounded-[82px] border-solid self-end max-md:mt-10 max-md:pr-5'>
          <div className='text-zinc-900 text-center text-lg leading-7 whitespace-nowrap justify-center items-stretch bg-lime-400 grow px-6 py-3.5 rounded-[140px] max-md:px-5'>
            For Individuals
          </div>{' '}
          <div className='text-white text-center text-lg leading-7 self-center grow whitespace-nowrap my-auto'>
            For Businesses
          </div>
        </div>
      </div>{' '}
      <div className='self-center w-full max-w-[1596px] mt-24 px-5 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
            <div className='items-center flex flex-col max-md:max-w-full max-md:mt-10'>
              <div className='items-center flex w-[98px] flex-col justify-center h-[98px] px-3 rounded-[70px]'>
                <div className='items-center border flex aspect-square flex-col justify-center w-full h-[74px] px-5 rounded-[50px] border-solid border-lime-400'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/e48a34ac661bc7e5948eb514446bae67bb15fa507eb25618c48c12e0f0adef4f?apiKey=8d891b24e36b4148b491c6131fe57140&'
                    className='aspect-square object-contain object-center w-full justify-center items-center overflow-hidden'
                  />
                </div>
              </div>{' '}
              <div className='self-stretch text-white text-center text-2xl leading-9 whitespace-nowrap mt-8 max-md:max-w-full'>
                Checking Accounts
              </div>{' '}
              <div className='self-stretch text-zinc-400 text-center text-lg font-light leading-7 mt-5 max-md:max-w-full'>
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </div>
            </div>
          </div>{' '}
          <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-center flex flex-col max-md:max-w-full max-md:mt-10'>
              <div className='items-center flex w-[98px] flex-col justify-center h-[98px] px-3 rounded-[70px]'>
                <div className='items-center border flex aspect-square flex-col justify-center w-full h-[74px] px-5 rounded-[50px] border-solid border-lime-400'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/b00c6546e4d08c63e13e3d8c4982de9917af6093ea4c0e9a85250225ecd60650?apiKey=8d891b24e36b4148b491c6131fe57140&'
                    className='aspect-square object-contain object-center w-full overflow-hidden'
                  />
                </div>
              </div>{' '}
              <div className='self-stretch text-white text-center text-2xl leading-9 whitespace-nowrap mt-8 max-md:max-w-full'>
                Savings Accounts
              </div>{' '}
              <div className='self-stretch text-zinc-400 text-center text-lg font-light leading-7 mt-5 max-md:max-w-full'>
                Build your savings with our competitive interest rates and
                flexible savings account options. Whether you're saving for a
                specific goal or want to grow your wealth over time, we have the
                right account for you.
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-center flex grow flex-col max-md:max-w-full max-md:mt-10'>
              <div className='items-center flex w-[98px] flex-col justify-center h-[98px] px-3 rounded-[70px]'>
                <div className='items-center border flex aspect-square flex-col justify-center w-full h-[74px] px-5 rounded-[50px] border-solid border-lime-400'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/2ba4640b58fccfbffeb46f457036d126582619c8427fcbdb13929f4ce606d475?apiKey=8d891b24e36b4148b491c6131fe57140&'
                    className='aspect-square object-contain object-center w-full overflow-hidden'
                  />
                </div>
              </div>
              <div className='self-stretch text-white text-center text-2xl leading-9 whitespace-nowrap mt-8 max-md:max-w-full'>
                Loans and Mortgages
              </div>
              <div className='self-stretch text-zinc-400 text-center text-lg font-light leading-7 mt-5 max-md:max-w-full'>
                Realize your dreams with our flexible loan and mortgage options.
                From personal loans to home mortgages, our experienced loan
                officers are here to guide you through the application process
                and help you secure the funds you need.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-center text-lime-400 text-5xl font-medium leading-[72px] w-[1296px] max-w-[1596px] mt-36 max-md:max-w-full max-md:text-4xl max-md:leading-[67px] max-md:mt-10'>
        Use Cases
      </div>
      <div className='self-center text-zinc-400 text-lg font-light leading-7 w-[1296px] max-w-[1596px] mt-3.5 max-md:max-w-full'>
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </div>
      <div className='self-center w-full max-w-[1596px] mt-20 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
            <div className='items-stretch bg-zinc-900 flex grow flex-col w-full p-12 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5'>
              <div className='max-md:max-w-full'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                    <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                      <div className='items-center flex w-[78px] flex-col justify-center h-[78px] px-2.5 rounded-[70px]'>
                        <div className='items-center border flex aspect-square flex-col justify-center w-full h-[58px] px-3.5 rounded-[50px] border-solid border-lime-400'>
                          <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/794ce5b90dd7d3b03be51bf01b80ef560ed3dbf741789c321773bd63667dea2c?apiKey=8d891b24e36b4148b491c6131fe57140&'
                            className='aspect-square object-contain object-center w-full justify-center items-center overflow-hidden'
                          />
                        </div>
                      </div>
                      <div className='self-stretch text-white text-center text-xl leading-8 mt-6'>
                        Managing Personal Finances
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-center self-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full pt-8 pb-12 px-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                      <div className='items-center flex w-[78px] flex-col justify-center h-[78px] px-2.5 rounded-[70px]'>
                        <div className='items-center border flex aspect-square flex-col justify-center w-full h-[58px] px-3.5 rounded-[50px] border-solid border-lime-400'>
                          <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/76da36043e3e1c1dac6416125647e741faf1d493a044b0cf5b382566f4734d0e?apiKey=8d891b24e36b4148b491c6131fe57140&'
                            className='aspect-square object-contain object-center w-full justify-center items-center overflow-hidden'
                          />
                        </div>
                      </div>
                      <div className='self-stretch text-white text-center text-xl leading-8 whitespace-nowrap mt-6 mb-2.5'>
                        Saving for the Future
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 max-md:max-w-full'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                    <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                      <div className='items-center flex w-[78px] flex-col justify-center h-[78px] px-2.5 rounded-[70px]'>
                        <div className='items-center border flex aspect-square flex-col justify-center w-full h-[58px] px-3.5 rounded-[50px] border-solid border-lime-400'>
                          <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/e7a04e464b596dbe3554b7f192fdcc988d49ece19ede5469909c71dde0f07461?apiKey=8d891b24e36b4148b491c6131fe57140&'
                            className='aspect-square object-contain object-center w-full overflow-hidden'
                          />
                        </div>
                      </div>
                      <div className='self-stretch text-white text-center text-xl leading-8 whitespace-nowrap mt-6'>
                        Homeownership
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                      <div className='items-center flex w-[78px] flex-col justify-center h-[78px] px-2.5 rounded-[70px]'>
                        <div className='items-center border flex aspect-square flex-col justify-center w-full h-[58px] px-3.5 rounded-[50px] border-solid border-lime-400'>
                          <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/e22f77a97bb94f831b2995e82f0b383875f335878b877c611ca11859641d224f?apiKey=8d891b24e36b4148b491c6131fe57140&'
                            className='aspect-square object-contain object-center w-full overflow-hidden'
                          />
                        </div>
                      </div>
                      <div className='self-stretch text-white text-center text-xl leading-8 whitespace-nowrap mt-6'>
                        Education Funding
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-start flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10'>
              <div className='self-stretch text-white text-3xl font-medium leading-10 whitespace-nowrap max-md:max-w-full'>
                For Individuals
              </div>
              <div className='self-stretch text-zinc-400 text-lg font-light leading-7 mt-3.5 max-md:max-w-full'>
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for
                our customers
              </div>
              <div className='self-stretch mt-16 max-md:max-w-full max-md:mt-10'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
                    <div className='items-stretch flex grow flex-col max-md:mt-10'>
                      <div className='text-lime-400 text-6xl font-medium leading-[87px] whitespace-nowrap max-md:text-4xl max-md:leading-[67px]'>
                        78%
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 mt-1.5'>
                        Secure Retirement Planning
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch flex grow flex-col max-md:mt-10'>
                      <div className='text-lime-400 text-6xl font-medium leading-[87px] whitespace-nowrap max-md:text-4xl max-md:leading-[67px]'>
                        63%
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 mt-1.5'>
                        Manageable Debt Consolidation
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch flex grow flex-col max-md:mt-10'>
                      <div className='text-lime-400 text-6xl font-medium leading-[87px] whitespace-nowrap max-md:text-4xl max-md:leading-[67px]'>
                        91%
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 mt-1.5'>
                        Reducing financial burdens
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-white text-center text-lg leading-7 whitespace-nowrap items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 justify-center mt-16 px-6 py-5 rounded-[82px] border-solid self-start max-md:mt-10 max-md:px-5'>
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-center w-full max-w-[1596px] mt-16 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
            <div className='items-start flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10'>
              <div className='self-stretch text-white text-3xl font-medium leading-10 whitespace-nowrap max-md:max-w-full'>
                For Business
              </div>
              <div className='self-stretch text-zinc-400 text-lg font-light leading-7 mt-3.5 max-md:max-w-full'>
                {' '}
                For businesses, we empower growth with working capital solutions
                that optimize cash flow, and our tailored financing options fuel
                business expansion. Whatever your financial aspirations,
                YourBank is committed to providing the right tools and support
                to achieve them
              </div>
              <div className='self-stretch mt-16 max-md:max-w-full max-md:mt-10'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
                    <div className='items-stretch flex grow flex-col max-md:mt-10'>
                      <div className='text-lime-400 text-6xl font-medium leading-[87px] whitespace-nowrap max-md:text-4xl max-md:leading-[67px]'>
                        65%
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 mt-1.5'>
                        Cash Flow Management
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch flex grow flex-col max-md:mt-10'>
                      <div className='text-lime-400 text-6xl font-medium leading-[87px] whitespace-nowrap max-md:text-4xl max-md:leading-[67px]'>
                        70%
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 mt-1.5'>
                        Drive Business Expansion
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch flex grow flex-col max-md:mt-10'>
                      <div className='text-lime-400 text-6xl font-medium leading-[87px] whitespace-nowrap max-md:text-4xl max-md:leading-[67px]'>
                        45%
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 mt-1.5'>
                        Streamline payroll processing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-white text-center text-lg leading-7 whitespace-nowrap items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 justify-center mt-16 px-6 py-5 rounded-[82px] border-solid self-start max-md:mt-10 max-md:px-5'>
                Learn More
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-stretch bg-zinc-900 flex grow flex-col w-full pl-12 pb-12 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:pl-5'>
              <div className='max-md:max-w-full'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0'>
                    <div className='self-stretch z-[1] grow mt-12 max-md:max-w-full max-md:mt-10'>
                      <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                        <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                          <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                            <div className='items-center flex w-[78px] flex-col justify-center h-[78px] px-2.5 rounded-[70px]'>
                              <div className='items-center border flex aspect-square flex-col justify-center w-full h-[58px] px-3.5 rounded-[50px] border-solid border-lime-400'>
                                <img
                                  loading='lazy'
                                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/f245817799d506c6901122b16996cedf033c78de8b08d7f5f0f5055e43b17c2b?apiKey=8d891b24e36b4148b491c6131fe57140&'
                                  className='aspect-square object-contain object-center w-full overflow-hidden'
                                />
                              </div>
                            </div>
                            <div className='self-stretch text-white text-center text-xl leading-8 mt-6'>
                              Startups and Entrepreneurs
                            </div>
                          </div>
                        </div>
                        <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                          <div className='items-center self-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full pt-8 pb-12 px-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                            <div className='items-center flex w-[78px] flex-col justify-center h-[78px] px-2.5 rounded-[70px]'>
                              <div className='items-center border flex aspect-square flex-col justify-center w-full h-[58px] px-3.5 rounded-[50px] border-solid border-lime-400'>
                                <img
                                  loading='lazy'
                                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/2dddcecc98aed428792ad7c4e6cb9c2e714485b2dbe19cc727e036c2f7f5343b?apiKey=8d891b24e36b4148b491c6131fe57140&'
                                  className='aspect-square object-contain object-center w-full overflow-hidden'
                                />
                              </div>
                            </div>
                            <div className='self-stretch text-white text-center text-xl leading-8 whitespace-nowrap mt-6 mb-2.5'>
                              Cash Flow Management
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0'>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/5a944051e8e9949b1bcacda129551822bd0b8f16e34ebc8314a50c724f40264b?apiKey=8d891b24e36b4148b491c6131fe57140&'
                      className='aspect-[0.95] object-contain object-center w-[213px] fill-[radial-gradient(152.24%_143.75%_at_103.26%_0%,rgba(25,25,25,0.30)_20.29%,rgba(202,255,51,0.30)_34.91%,rgba(25,25,25,0.30)_60.69%)] overflow-hidden shrink-0 max-w-full'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-5 max-md:max-w-full'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                    <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full px-8 py-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                      <div className='items-stretch flex w-[99px] max-w-full flex-col justify-center p-2.5 rounded-[70px]'>
                        <div className='items-center border flex flex-col justify-center pl-3.5 pr-9 py-3.5 rounded-[50px] border-solid border-lime-400 max-md:pr-5'>
                          <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/51895a52e956a209ceb6bda9ee0735366a3af9222d586b4761e5bc1be1e6322c?apiKey=8d891b24e36b4148b491c6131fe57140&'
                            className='aspect-square object-contain object-center w-[30px] overflow-hidden'
                          />
                        </div>
                      </div>
                      <div className='self-stretch text-white text-center text-xl leading-8 whitespace-nowrap mt-6'>
                        Business Expansion
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full px-8 py-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5'>
                      <div className='items-stretch flex w-[99px] max-w-full flex-col justify-center p-2.5 rounded-[70px]'>
                        <div className='items-center border flex flex-col justify-center pl-3.5 pr-9 py-3.5 rounded-[50px] border-solid border-lime-400 max-md:pr-5'>
                          <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/f639615ae82269ef275da5b095ce8781d8c14c669b1737c9afb35736ca67bc21?apiKey=8d891b24e36b4148b491c6131fe57140&'
                            className='aspect-square object-contain object-center w-[30px] overflow-hidden'
                          />
                        </div>
                      </div>
                      <div className='self-stretch text-white text-center text-xl leading-8 whitespace-nowrap mt-6'>
                        Payment Solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-center text-lime-400 text-5xl font-medium leading-[72px] w-[1296px] max-w-[1596px] mt-36 max-md:max-w-full max-md:text-4xl max-md:leading-[67px] max-md:mt-10'>
        <span className='text-white'>Our</span>
        <span className='text-lime-400'> Features</span>
      </div>
      <div className='self-center text-zinc-400 text-lg font-light leading-7 w-[1296px] max-w-[1596px] mt-3.5 max-md:max-w-full'>
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </div>
      <div className='self-center w-full max-w-[1596px] mt-20 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0'>
            <div className='items-stretch bg-zinc-900 flex flex-col w-full p-12 rounded-xl max-md:mt-8 max-md:px-5'>
              <div className='text-lime-400 text-lg leading-7 whitespace-nowrap items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 justify-center pl-6 pr-12 py-5 rounded-[100px] border-solid max-md:px-5'>
                Online Banking
              </div>
              <div className='text-white text-lg leading-7 whitespace-nowrap items-stretch border border-[color:var(--Grey-15,#262626)] justify-center mt-6 pl-6 pr-14 py-5 rounded-[100px] border-solid max-md:px-5'>
                Financial Tools
              </div>
              <div className='text-white text-lg leading-7 whitespace-nowrap items-stretch border border-[color:var(--Grey-15,#262626)] justify-center mt-6 px-6 py-5 rounded-[100px] border-solid max-md:px-5'>
                Customer Support
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-stretch flex grow flex-col max-md:max-w-full max-md:mt-8'>
              <div className='max-md:max-w-full'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch self-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-12 rounded-xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
                      <div className='flex justify-between gap-2.5 items-start max-md:max-w-full max-md:flex-wrap'>
                        <div className='text-white text-2xl leading-8 grow whitespace-nowrap max-md:max-w-full'>
                          24/7 Account Access
                        </div>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=8d891b24e36b4148b491c6131fe57140&'
                          className='aspect-square object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full'
                        />
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 tracking-normal mt-8 mb-7 max-md:max-w-full'>
                        Enjoy the convenience of accessing your accounts
                        anytime, anywhere through our secure online banking
                        platform. Check balances, transfer funds, and pay bills
                        with ease.
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-12 rounded-xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
                      <div className='flex justify-between gap-2.5 items-start max-md:max-w-full max-md:flex-wrap'>
                        <div className='text-white text-2xl leading-8 grow whitespace-nowrap max-md:max-w-full'>
                          Mobile Banking App
                        </div>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=8d891b24e36b4148b491c6131fe57140&'
                          className='aspect-square object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full'
                        />
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 tracking-normal mt-8 max-md:max-w-full'>
                        Stay connected to your finances on the go with our
                        user-friendly mobile banking app. Easily manage your
                        accounts, deposit checks, and make payments from your
                        smartphone or tablet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-8 max-md:max-w-full'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-12 rounded-xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
                      <div className='flex justify-between gap-2.5 items-start max-md:max-w-full max-md:flex-wrap'>
                        <div className='text-white text-2xl leading-8 grow whitespace-nowrap max-md:max-w-full'>
                          Secure Transactions
                        </div>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=8d891b24e36b4148b491c6131fe57140&'
                          className='aspect-square object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full'
                        />
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 tracking-normal mt-8 max-md:max-w-full'>
                        Rest assured knowing that your transactions are
                        protected by industry-leading security measures. We
                        employ encryption and multi-factor authentication to
                        safeguard your financial information.
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                    <div className='items-stretch self-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex grow flex-col w-full p-12 rounded-xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
                      <div className='flex justify-between gap-2.5 items-start max-md:max-w-full max-md:flex-wrap'>
                        <div className='text-white text-2xl leading-8 grow whitespace-nowrap max-md:max-w-full'>
                          Bill Pay and Transfers
                        </div>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=8d891b24e36b4148b491c6131fe57140&'
                          className='aspect-square object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full'
                        />
                      </div>
                      <div className='text-zinc-400 text-lg font-light leading-7 tracking-normal mt-8 mb-7 max-md:max-w-full'>
                        Save time and avoid late fees with our convenient bill
                        pay service. Set up recurring payments or make one-time
                        transfers between your accounts with just a few clicks.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-center text-white text-5xl font-medium leading-[72px] w-[1295px] max-w-[1595px] mt-36 max-md:max-w-full max-md:text-4xl max-md:leading-[67px] max-md:mt-10'>
        <span className='text-lime-400'>Frequently</span>
        <span className='text-white'> Asked Questions</span>
      </div>
      <div className='self-center text-zinc-400 text-lg font-light leading-7 w-[1295px] max-w-[1595px] mt-3.5 max-md:max-w-full'>
        Still you have any questions? Contact our Team via support@yourbank.com
      </div>
      <div className='self-center w-full max-w-[1595px] mt-20 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
            <div className='items-stretch self-stretch border border-[color:var(--Grey-15,#262626)] flex grow flex-col w-full p-12 rounded-2xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
              <div className='text-white text-xl font-medium whitespace-nowrap max-md:max-w-full'>
                How do I open an account with YourBank?
              </div>
              <div className='bg-neutral-800 shrink-0 h-px mt-7 max-md:max-w-full' />
              <div className='text-zinc-400 text-lg font-light leading-7 mt-8 mb-8 max-md:max-w-full'>
                Opening an account with YourBank is easy. Simply visit our
                website and click on the &quot;Open an Account&quot; button.
                Follow the prompts, provide the required information, and
                complete the application process. If you have any questions or
                need assistance, our customer support team is available to help.
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-stretch border border-[color:var(--Grey-15,#262626)] flex grow flex-col w-full p-12 rounded-2xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
              <div className='text-white text-xl font-medium max-md:max-w-full'>
                What documents do I need to provide to apply for a loan?
              </div>
              <div className='bg-neutral-800 shrink-0 h-px mt-7 max-md:max-w-full' />
              <div className='text-zinc-400 text-lg font-light leading-7 mt-8 max-md:max-w-full'>
                The documents required for a loan application may vary depending
                on the type of loan you are applying for. Generally, you will
                need to provide identification documents (such as a passport or
                driver's license), proof of income (such as pay stubs or tax
                returns), and information about the collateral (if applicable).
                Our loan officers will guide you through the specific
                requirements during the application process.
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className='self-center w-full max-w-[1595px] mt-8 max-md:max-w-full'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
            <div className='items-stretch border border-[color:var(--Grey-15,#262626)] flex grow flex-col w-full p-12 rounded-2xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
              <div className='text-white text-xl font-medium whitespace-nowrap max-md:max-w-full'>
                How can I access my accounts online?
              </div>{' '}
              <div className='bg-neutral-800 shrink-0 h-px mt-7 max-md:max-w-full' />{' '}
              <div className='text-zinc-400 text-lg font-light leading-7 mt-8 max-md:max-w-full'>
                Accessing your accounts online is simple and secure. Visit our
                website and click on the &quot;Login&quot; button. Enter your
                username and password to access your accounts. If you haven't
                registered for online banking, click on the &quot;Enroll
                Now&quot; button and follow the registration process. If you
                need assistance, our customer support team is available to guide
                you.
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-stretch border border-[color:var(--Grey-15,#262626)] flex grow flex-col w-full p-12 rounded-2xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5'>
              <div className='text-white text-xl font-medium max-md:max-w-full'>
                Are my transactions and personal information secure?
              </div>
              <div className='bg-neutral-800 shrink-0 h-px mt-7 max-md:max-w-full' />
              <div className='text-zinc-400 text-lg font-light leading-7 mt-8 max-md:max-w-full'>
                At YourBank, we prioritize the security of your transactions and
                personal information. We employ industry-leading encryption and
                multi-factor authentication to ensure that your data is
                protected. Additionally, we regularly update our security
                measures to stay ahead of emerging threats. You can bank with
                confidence knowing that we have robust security systems in
                place.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 self-center flex gap-1 px-6 py-5 rounded-[100px] border-solid max-md:px-5'>
        <div className='text-white text-lg leading-7 grow whitespace-nowrap'>
          Load All FAQ’s
        </div>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/e95d5feace352e7a76a0975b26cc887fa231b192998452b3d57a1b186ef35aed?apiKey=8d891b24e36b4148b491c6131fe57140&'
          className='aspect-square object-contain object-center w-[22px] overflow-hidden self-center shrink-0 max-w-full my-auto'
        />
      </div>
      <div className='items-stretch self-center flex w-full max-w-[1596px] justify-between gap-5 mt-36 max-md:max-w-full max-md:flex-wrap max-md:mt-10'>
        <div className='items-stretch flex grow basis-[0%] flex-col px-5 max-md:max-w-full'>
          <div className='text-lime-400 text-5xl font-medium leading-[72px] whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[67px]'>
            <span className='text-white'>Our</span>
            <span className='text-lime-400'> Testimonials</span>
          </div>
          <div className='text-zinc-400 text-lg font-light leading-7 mt-3.5 max-md:max-w-full'>
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </div>
        </div>
        <div className='items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex justify-between gap-5 mt-14 pl-3.5 pr-10 py-3.5 rounded-[82px] border-solid self-end max-md:mt-10 max-md:pr-5'>
          <div className='text-zinc-900 text-center text-lg leading-7 whitespace-nowrap justify-center items-stretch bg-lime-400 grow px-6 py-3.5 rounded-[140px] max-md:px-5'>
            For Individuals
          </div>
          <div className='text-white text-center text-lg leading-7 self-center grow whitespace-nowrap my-auto'>
            For Businesses
          </div>
        </div>
      </div>
      <div className='items-stretch self-center flex w-full max-w-[1596px] justify-between gap-5 mt-24 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10'>
        <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 self-center flex aspect-square flex-col justify-center w-[62px] h-[62px] my-auto px-3.5 rounded-[100px] border-solid'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/268d3673f255e7378e4b9802c2d53e904a7a800bbb59afeea68d8ce37ba181ad?apiKey=8d891b24e36b4148b491c6131fe57140&'
            className='aspect-square object-contain object-center w-full overflow-hidden'
          />
        </div>
        <div className='max-md:max-w-full'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
              <div className='items-stretch flex flex-col max-md:mt-10'>
                <div className='items-stretch flex gap-5 max-md:justify-center'>
                  <div className='bg-neutral-800 self-center w-[152px] shrink-0 h-px my-auto' />
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/d70a679a22c347650dcffcafebf0d331f2208a408e1c7075a586d36b7713c5d0?apiKey=8d891b24e36b4148b491c6131fe57140&'
                    className='aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full'
                  />
                  <div className='bg-neutral-800 self-center w-[152px] shrink-0 h-px my-auto' />
                </div>
                <div className='text-white text-center text-lg leading-7 mt-12 max-md:mt-10'>
                  YourBank has been my trusted financial partner for years.
                  Their personalized service and innovative digital banking
                  solutions have made managing my finances a breeze.
                </div>
                <div className='text-lime-400 text-center text-lg font-medium leading-7 whitespace-nowrap mt-12 max-md:mt-10'>
                  Sara T
                </div>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
              <div className='items-stretch flex grow flex-col max-md:mt-10'>
                <div className='items-stretch flex justify-between gap-5 pl-20 max-md:pl-5'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/40e5784720f8f6a8b087725ac814221d710e7923b00611a729b12d06534fbddf?apiKey=8d891b24e36b4148b491c6131fe57140&'
                    className='aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full'
                  />
                  <div className='bg-neutral-800 self-center w-[152px] shrink-0 h-px my-auto' />
                </div>
                <div className='text-white text-center text-lg leading-7 mt-12 max-md:mt-10'>
                  I recently started my own business, and YourBank has been
                  instrumental in helping me set up my business accounts and
                  secure the financing I needed. Their expert guidance and
                  tailored solutions have been invaluable.
                </div>
                <div className='text-lime-400 text-center text-lg font-medium leading-7 whitespace-nowrap mt-12 max-md:mt-10'>
                  John D
                </div>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
              <div className='items-stretch flex grow flex-col max-md:mt-10'>
                <div className='items-center flex justify-between gap-5 pr-12 max-md:pr-5'>
                  <div className='bg-neutral-800 w-[275px] shrink-0 max-w-full h-px my-auto' />
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/d4723507f47a2b70cdfd51c8d22e1065f6f2d1c995cad411efb662ae8ba51e02?apiKey=8d891b24e36b4148b491c6131fe57140&'
                    className='aspect-square object-contain object-center w-[60px] overflow-hidden self-stretch shrink-0 max-w-full'
                  />
                </div>
                <div className='text-white text-center text-lg leading-7 mt-12 max-md:mt-10'>
                  I love the convenience of YourBank's mobile banking app. It
                  allows me to stay on top of my finances and make transactions
                  on the go. The app is user-friendly and secure, giving me
                  peace of mind.
                </div>{' '}
                <div className='text-lime-400 text-center text-lg font-medium leading-7 whitespace-nowrap mt-12 max-md:mt-10'>
                  Emily G
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
        <div className='items-center border border-[color:var(--Grey-15,#262626)] bg-zinc-900 self-center flex aspect-square flex-col justify-center w-[62px] h-[62px] my-auto px-3.5 rounded-[100px] border-solid'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/d3f97d4e414eabcf0dcb19d7badcb8b11e99b2da33fd7bfb7703656e695cb4ac?apiKey=8d891b24e36b4148b491c6131fe57140&'
            className='aspect-square object-contain object-center w-full overflow-hidden'
          />
        </div>
      </div>{' '}
      <div className='flex-col items-center overflow-hidden self-center relative flex min-h-[288px] w-full justify-between gap-5 mt-36 px-20 py-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5'>
        <img
          loading='lazy'
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/104d997c71ad0508fc33206316f37240127b06acb359cee6bbaa95610a374af0?apiKey=8d891b24e36b4148b491c6131fe57140&'
          className='absolute h-full w-full object-cover object-center inset-0'
        />{' '}
        <div className='relative items-stretch flex grow basis-[0%] flex-col my-auto max-md:max-w-full'>
          <div className='text-lime-400 text-4xl leading-[60px] max-md:max-w-full'>
            <span className='text-white'>
              Start your financial journey with{' '}
            </span>
            <span className='text-lime-400'>YourBank today!</span>
          </div>{' '}
          <div className='text-zinc-400 text-lg font-light leading-7 mt-3.5 max-md:max-w-full'>
            Ready to take control of your finances? Join YourBank now, and let
            us help you achieve your financial goals with our tailored solutions
            and exceptional customer service
          </div>
        </div>{' '}
        <div className='relative text-zinc-900 text-lg leading-7 whitespace-nowrap items-stretch bg-lime-400 justify-center my-auto px-8 py-5 rounded-[82px] max-md:px-5'>
          Open Account
        </div>
      </div>{' '}
      <div className='items-center bg-zinc-900 self-stretch flex w-full flex-col justify-center mt-36 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5'>
        <div className='flex w-full max-w-[1596px] flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10'>
          <div className='items-center flex flex-col justify-center px-16 max-md:max-w-full max-md:px-5'>
            <div className='flex w-[323px] max-w-full flex-col items-center'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/d1dcc65c0d93248b0be162984b6dc62a0122f3fdd25c952b052b218d8dba713e?apiKey=8d891b24e36b4148b491c6131fe57140&'
                className='aspect-[3.9] object-contain object-center w-[156px] justify-center items-center overflow-hidden max-w-full'
              />{' '}
              <div className='items-stretch self-stretch flex justify-between gap-5 mt-12 max-md:justify-center max-md:mt-10'>
                <div className='text-zinc-200 text-lg leading-7 grow whitespace-nowrap'>
                  Home
                </div>{' '}
                <div className='text-zinc-200 text-lg leading-7'>Careers</div>{' '}
                <div className='text-zinc-200 text-lg leading-7'>About</div>{' '}
                <div className='text-zinc-200 text-lg leading-7 grow whitespace-nowrap'>
                  Security
                </div>
              </div>
            </div>
          </div>{' '}
          <div className='bg-neutral-800 shrink-0 h-px mt-12 max-md:max-w-full max-md:mt-10' />{' '}
          <div className='justify-center items-center flex flex-col mt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5'>
            <div className='flex items-stretch gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center'>
              <div className='items-center flex justify-between gap-1.5 rounded-md'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/74446b11abc9df77ed6dfb16fe3f09750976a96ee9b2292133cb23600b9d4510?apiKey=8d891b24e36b4148b491c6131fe57140&'
                  className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto'
                />{' '}
                <div className='text-zinc-200 text-lg leading-7 self-stretch grow whitespace-nowrap'>
                  hello@skillbirdge.com
                </div>
              </div>{' '}
              <div className='items-center flex justify-between gap-1.5 rounded-md'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/4b6fa03883d49071ecf2cc27b940c60aab15ef287a22671ffe8387751b2bbbe5?apiKey=8d891b24e36b4148b491c6131fe57140&'
                  className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto'
                />{' '}
                <div className='text-zinc-200 text-lg leading-7 self-stretch grow whitespace-nowrap'>
                  +91 91813 23 2309
                </div>
              </div>{' '}
              <div className='items-center flex justify-between gap-1.5 rounded-md'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/417fec37f203adf17566f49ae11c8ebac555f7786af608a0c1212165a6fadd13?apiKey=8d891b24e36b4148b491c6131fe57140&'
                  className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto'
                />{' '}
                <div className='text-zinc-200 text-lg leading-7 self-stretch grow whitespace-nowrap'>
                  Somewhere in the World
                </div>
              </div>
            </div>
          </div>{' '}
          <div className='bg-neutral-800 shrink-0 h-px mt-12 max-md:max-w-full max-md:mt-10' />{' '}
          <div className='justify-between items-stretch border border-[color:var(--Grey-15,#262626)] bg-zinc-900 flex w-full gap-5 mt-12 pl-4 pr-8 py-4 rounded-[100px] border-solid max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:pr-5'>
            <div className='items-stretch flex gap-3.5 max-md:justify-center'>
              <div className='items-center bg-lime-400 flex aspect-square flex-col justify-center w-[52px] h-[52px] px-3.5 rounded-[100px]'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/a7727f93a0f5fe4c316d6049e980de4614e5f66d9661a00253be54a8b478437c?apiKey=8d891b24e36b4148b491c6131fe57140&'
                  className='aspect-square object-contain object-center w-full overflow-hidden'
                />
              </div>{' '}
              <div className='items-center bg-lime-400 flex aspect-square flex-col justify-center w-[52px] h-[52px] px-3.5 rounded-[100px]'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/779a351158a92492ef741c6d13a81a51b93c19c38e07f6ec72cbbadb0afa5a72?apiKey=8d891b24e36b4148b491c6131fe57140&'
                  className='aspect-square object-contain object-center w-full overflow-hidden'
                />
              </div>{' '}
              <div className='items-center bg-lime-400 flex aspect-square flex-col justify-center w-[52px] h-[52px] px-3.5 rounded-[100px]'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/81d59da6ed79ad6ba4824ef6051ae7936735e1a5ad415c8dbdb1e429ca4d4242?apiKey=8d891b24e36b4148b491c6131fe57140&'
                  className='aspect-square object-contain object-center w-full overflow-hidden'
                />
              </div>
            </div>{' '}
            <div className='text-zinc-400 text-lg font-light leading-7 self-center grow shrink basis-auto my-auto'>
              YourBank All Rights Reserved
            </div>{' '}
            <div className='items-stretch self-center flex justify-between gap-5 my-auto'>
              <div className='text-zinc-400 text-lg font-light leading-7 grow whitespace-nowrap'>
                Privacy Policy
              </div>{' '}
              <div className='text-zinc-400 text-lg font-light leading-7 grow whitespace-nowrap'>
                Terms of Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
