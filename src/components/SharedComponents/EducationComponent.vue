<template>
  <div class="bg-white shadow sm:rounded-lg mb-4 mx-2">
    <div class="px-4 py-5 sm:p-6 mb-0">
      <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Education</h3>

      <!-- E COMP -->
      <div class="flex flex-col w-full">
        <div class="flex w-full">
          <div class="rounded-md w-1/2 pr-5">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
              for="grid-state"
            >Degree</label>
            <textarea
              id="longDescription"
              rows="1"
              class="border-gray-100 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
              placeholder="Degree"
            ></textarea>
          </div>
          <div class="rounded-md w-1/2">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
              for="grid-state"
            >University</label>
            <textarea
              id="longDescription"
              rows="1"
              class="border-gray-100 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
              placeholder="University"
            ></textarea>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-full">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-0 mt-5"
              for="grid-state"
            >Start</label>
            <div class="flex">
              <div class="w-full md:w-2/4 mt-2 pr-5">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-2/4 mt-2 pr-5">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>

                    <option>1989</option>
                    <option>1988</option>
                    <option>1987</option>
                    <option>1986</option>
                    <option>1985</option>
                    <option>1984</option>
                    <option>1983</option>
                    <option>1982</option>
                    <option>1981</option>
                    <option>1980</option>

                    <option>1979</option>
                    <option>1978</option>
                    <option>1977</option>
                    <option>1976</option>
                    <option>1975</option>
                    <option>1974</option>
                    <option>1973</option>
                    <option>1972</option>
                    <option>1971</option>
                    <option>1970</option>

                    <option>1969</option>
                    <option>1968</option>
                    <option>1967</option>
                    <option>1966</option>
                    <option>1965</option>
                    <option>1964</option>
                    <option>1963</option>
                    <option>1962</option>
                    <option>1961</option>
                    <option>1960</option>

                    <option>1959</option>
                    <option>1958</option>
                    <option>1957</option>
                    <option>1956</option>
                    <option>1955</option>
                    <option>1954</option>
                    <option>1953</option>
                    <option>1952</option>
                    <option>1951</option>
                    <option>1950</option>

                    <option>1949</option>
                    <option>1948</option>
                    <option>1947</option>
                    <option>1946</option>
                    <option>1945</option>
                    <option>1944</option>
                    <option>1943</option>
                    <option>1942</option>
                    <option>1941</option>
                    <option>1940</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-0 mt-5"
                for="grid-state"
              >End</label>
              <div class="flex">
                <div class="w-1/2 mt-2 pr-5">
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 mt-2">
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2010</option>
                      <option>2009</option>
                      <option>2008</option>
                      <option>2007</option>
                      <option>2006</option>
                      <option>2005</option>
                      <option>2004</option>
                      <option>2003</option>
                      <option>2002</option>
                      <option>2001</option>
                      <option>2000</option>
                      <option>1999</option>
                      <option>1998</option>
                      <option>1997</option>
                      <option>1996</option>
                      <option>1995</option>
                      <option>1994</option>
                      <option>1993</option>
                      <option>1992</option>
                      <option>1991</option>
                      <option>1990</option>

                      <option>1989</option>
                      <option>1988</option>
                      <option>1987</option>
                      <option>1986</option>
                      <option>1985</option>
                      <option>1984</option>
                      <option>1983</option>
                      <option>1982</option>
                      <option>1981</option>
                      <option>1980</option>

                      <option>1979</option>
                      <option>1978</option>
                      <option>1977</option>
                      <option>1976</option>
                      <option>1975</option>
                      <option>1974</option>
                      <option>1973</option>
                      <option>1972</option>
                      <option>1971</option>
                      <option>1970</option>

                      <option>1969</option>
                      <option>1968</option>
                      <option>1967</option>
                      <option>1966</option>
                      <option>1965</option>
                      <option>1964</option>
                      <option>1963</option>
                      <option>1962</option>
                      <option>1961</option>
                      <option>1960</option>

                      <option>1959</option>
                      <option>1958</option>
                      <option>1957</option>
                      <option>1956</option>
                      <option>1955</option>
                      <option>1954</option>
                      <option>1953</option>
                      <option>1952</option>
                      <option>1951</option>
                      <option>1950</option>

                      <option>1949</option>
                      <option>1948</option>
                      <option>1947</option>
                      <option>1946</option>
                      <option>1945</option>
                      <option>1944</option>
                      <option>1943</option>
                      <option>1942</option>
                      <option>1941</option>
                      <option>1940</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div>divide</div> -->
            <div class="flex items-center mt-5 ml-1">
              <input
                class
                type="checkbox"
                id="checkbox"
                v-model="checked"
                v-on:click="advancedIntoView()"
              />
              <label id="advancedOptions" class="ml-2 text-xs" for="checkbox">Ongoing</label>
            </div>
          </div>
        </div>
      </div>

      <!-- E COMP end -->

      <div v-show="education2" class="flex flex-col w-full mt-16">
        <div class="flex w-full">
          <div class="rounded-md w-1/2 pr-5">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
              for="grid-state"
            >Degree</label>
            <textarea
              id="longDescription"
              rows="1"
              class="border-gray-100 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
              placeholder="Degree"
            ></textarea>
          </div>
          <div class="rounded-md w-1/2">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
              for="grid-state"
            >University</label>
            <textarea
              id="longDescription"
              rows="1"
              class="border-gray-100 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
              placeholder="University"
            ></textarea>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-full">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-0 mt-5"
              for="grid-state"
            >Start</label>
            <div class="flex">
              <div class="w-full md:w-2/4 mt-2 pr-5">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-2/4 mt-2 pr-5">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>

                    <option>1989</option>
                    <option>1988</option>
                    <option>1987</option>
                    <option>1986</option>
                    <option>1985</option>
                    <option>1984</option>
                    <option>1983</option>
                    <option>1982</option>
                    <option>1981</option>
                    <option>1980</option>

                    <option>1979</option>
                    <option>1978</option>
                    <option>1977</option>
                    <option>1976</option>
                    <option>1975</option>
                    <option>1974</option>
                    <option>1973</option>
                    <option>1972</option>
                    <option>1971</option>
                    <option>1970</option>

                    <option>1969</option>
                    <option>1968</option>
                    <option>1967</option>
                    <option>1966</option>
                    <option>1965</option>
                    <option>1964</option>
                    <option>1963</option>
                    <option>1962</option>
                    <option>1961</option>
                    <option>1960</option>

                    <option>1959</option>
                    <option>1958</option>
                    <option>1957</option>
                    <option>1956</option>
                    <option>1955</option>
                    <option>1954</option>
                    <option>1953</option>
                    <option>1952</option>
                    <option>1951</option>
                    <option>1950</option>

                    <option>1949</option>
                    <option>1948</option>
                    <option>1947</option>
                    <option>1946</option>
                    <option>1945</option>
                    <option>1944</option>
                    <option>1943</option>
                    <option>1942</option>
                    <option>1941</option>
                    <option>1940</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-0 mt-5"
                for="grid-state"
              >End</label>
              <div class="flex">
                <div class="w-1/2 mt-2 pr-5">
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 mt-2">
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2010</option>
                      <option>2009</option>
                      <option>2008</option>
                      <option>2007</option>
                      <option>2006</option>
                      <option>2005</option>
                      <option>2004</option>
                      <option>2003</option>
                      <option>2002</option>
                      <option>2001</option>
                      <option>2000</option>
                      <option>1999</option>
                      <option>1998</option>
                      <option>1997</option>
                      <option>1996</option>
                      <option>1995</option>
                      <option>1994</option>
                      <option>1993</option>
                      <option>1992</option>
                      <option>1991</option>
                      <option>1990</option>

                      <option>1989</option>
                      <option>1988</option>
                      <option>1987</option>
                      <option>1986</option>
                      <option>1985</option>
                      <option>1984</option>
                      <option>1983</option>
                      <option>1982</option>
                      <option>1981</option>
                      <option>1980</option>

                      <option>1979</option>
                      <option>1978</option>
                      <option>1977</option>
                      <option>1976</option>
                      <option>1975</option>
                      <option>1974</option>
                      <option>1973</option>
                      <option>1972</option>
                      <option>1971</option>
                      <option>1970</option>

                      <option>1969</option>
                      <option>1968</option>
                      <option>1967</option>
                      <option>1966</option>
                      <option>1965</option>
                      <option>1964</option>
                      <option>1963</option>
                      <option>1962</option>
                      <option>1961</option>
                      <option>1960</option>

                      <option>1959</option>
                      <option>1958</option>
                      <option>1957</option>
                      <option>1956</option>
                      <option>1955</option>
                      <option>1954</option>
                      <option>1953</option>
                      <option>1952</option>
                      <option>1951</option>
                      <option>1950</option>

                      <option>1949</option>
                      <option>1948</option>
                      <option>1947</option>
                      <option>1946</option>
                      <option>1945</option>
                      <option>1944</option>
                      <option>1943</option>
                      <option>1942</option>
                      <option>1941</option>
                      <option>1940</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                        <div class="flex items-center mt-5 ml-1">
              <input
                class
                type="checkbox"
                id="checkbox"
                v-model="checked"
                v-on:click="advancedIntoView()"
              />
              <label id="advancedOptions" class="ml-2 text-xs" for="checkbox">Ongoing</label>
            </div>
          </div>
        </div>
      </div>

      <div v-show="education3" class="flex flex-col w-full mt-16">
        <div class="flex w-full">
          <div class="rounded-md w-1/2 pr-5">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
              for="grid-state"
            >Degreee</label>
            <textarea
              id="longDescription"
              rows="1"
              class="border-gray-100 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
              placeholder="Degree"
            ></textarea>
          </div>
          <div class="rounded-md w-1/2">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
              for="grid-state"
            >Usiversity</label>
            <textarea
              id="longDescription"
              rows="1"
              class="border-gray-100 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
              placeholder="Univeristy"
            ></textarea>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-full">
            <label
              class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-0 mt-5"
              for="grid-state"
            >Start</label>
            <div class="flex">
              <div class="w-full md:w-2/4 mt-2 pr-5">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-2/4 mt-2 pr-5">
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>

                    <option>1989</option>
                    <option>1988</option>
                    <option>1987</option>
                    <option>1986</option>
                    <option>1985</option>
                    <option>1984</option>
                    <option>1983</option>
                    <option>1982</option>
                    <option>1981</option>
                    <option>1980</option>

                    <option>1979</option>
                    <option>1978</option>
                    <option>1977</option>
                    <option>1976</option>
                    <option>1975</option>
                    <option>1974</option>
                    <option>1973</option>
                    <option>1972</option>
                    <option>1971</option>
                    <option>1970</option>

                    <option>1969</option>
                    <option>1968</option>
                    <option>1967</option>
                    <option>1966</option>
                    <option>1965</option>
                    <option>1964</option>
                    <option>1963</option>
                    <option>1962</option>
                    <option>1961</option>
                    <option>1960</option>

                    <option>1959</option>
                    <option>1958</option>
                    <option>1957</option>
                    <option>1956</option>
                    <option>1955</option>
                    <option>1954</option>
                    <option>1953</option>
                    <option>1952</option>
                    <option>1951</option>
                    <option>1950</option>

                    <option>1949</option>
                    <option>1948</option>
                    <option>1947</option>
                    <option>1946</option>
                    <option>1945</option>
                    <option>1944</option>
                    <option>1943</option>
                    <option>1942</option>
                    <option>1941</option>
                    <option>1940</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-0 mt-5"
                for="grid-state"
              >End</label>
              <div class="flex">
                <div class="w-1/2 mt-2 pr-5">
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 mt-2">
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2010</option>
                      <option>2009</option>
                      <option>2008</option>
                      <option>2007</option>
                      <option>2006</option>
                      <option>2005</option>
                      <option>2004</option>
                      <option>2003</option>
                      <option>2002</option>
                      <option>2001</option>
                      <option>2000</option>
                      <option>1999</option>
                      <option>1998</option>
                      <option>1997</option>
                      <option>1996</option>
                      <option>1995</option>
                      <option>1994</option>
                      <option>1993</option>
                      <option>1992</option>
                      <option>1991</option>
                      <option>1990</option>

                      <option>1989</option>
                      <option>1988</option>
                      <option>1987</option>
                      <option>1986</option>
                      <option>1985</option>
                      <option>1984</option>
                      <option>1983</option>
                      <option>1982</option>
                      <option>1981</option>
                      <option>1980</option>

                      <option>1979</option>
                      <option>1978</option>
                      <option>1977</option>
                      <option>1976</option>
                      <option>1975</option>
                      <option>1974</option>
                      <option>1973</option>
                      <option>1972</option>
                      <option>1971</option>
                      <option>1970</option>

                      <option>1969</option>
                      <option>1968</option>
                      <option>1967</option>
                      <option>1966</option>
                      <option>1965</option>
                      <option>1964</option>
                      <option>1963</option>
                      <option>1962</option>
                      <option>1961</option>
                      <option>1960</option>

                      <option>1959</option>
                      <option>1958</option>
                      <option>1957</option>
                      <option>1956</option>
                      <option>1955</option>
                      <option>1954</option>
                      <option>1953</option>
                      <option>1952</option>
                      <option>1951</option>
                      <option>1950</option>

                      <option>1949</option>
                      <option>1948</option>
                      <option>1947</option>
                      <option>1946</option>
                      <option>1945</option>
                      <option>1944</option>
                      <option>1943</option>
                      <option>1942</option>
                      <option>1941</option>
                      <option>1940</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                        <div class="flex items-center mt-5 ml-1">
              <input
                class
                type="checkbox"
                id="checkbox"
                v-model="checked"
                v-on:click="advancedIntoView()"
              />
              <label id="advancedOptions" class="ml-2 text-xs" for="checkbox">Ongoing</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between px-7">
      <div class="w-full">
        <button
          v-show="education2 && !education3"
          @click="remove1()"
          class="mb-6 px-2 py-1 rounded-sm bg-red-400 text-sm text-white w-3/12"
        >Remove</button>

        <button
          v-show="education3"
          @click="remove2()"
          class="mb-6 px-2 py-1 rounded-sm bg-red-400 text-sm text-white w-3/12"
        >Remove</button>
      </div>

      <div class="flex w-full justify-end">
        <!-- ON CLICK POST EDUCATION 1 -->
        <button
          v-if="!education2"
          @click="addMore1()"
          class="mb-6 px-2 py-1 rounded-sm bg-green-400 text-sm text-white w-3/12"
        >Add More</button>

        <!-- ON CLICK POST EDUCATION 2 -->
        <button
          v-if="education2 && !education3"
          @click="addMore2()"
          class="mb-6 px-2 py-1 rounded-sm bg-green-400 text-sm text-white w-3/12"
        >Add More</button>
      </div>
    </div>
  </div>

  <!-- EDUCATION COMPONENT END HERE -->
</template>

<script>
export default {
  data: () => ({
    education2: false,
    education3: false
  }),
  components: {},
  methods: {
    addMore1() {
      this.education2 = true;
      console.log(this.education2);
    },
    addMore2() {
      this.education3 = true;
    },
    remove1() {
      this.education2 = false;
    },
    remove2() {
      this.education3 = false;
    }
  }
};
</script>