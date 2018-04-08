import React, { Component } from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
  RefinementList,
  CurrentRefinements,
  ClearRefinements,
  Menu
} from 'react-instantsearch/dom';

const Hit = ({hit}) =>
  <div className="hit">
    <div className="hit-image">
      <img src={hit.image}/>
    </div>
    <div className="hit-content">
      <div className="hit-price">
        ${hit.price}
      </div>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit}/>
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={hit}/>
      </div>
    </div>
  </div>

const Sidebar = () =>
  <div className="left-column">
    <h5>Category</h5>
    <RefinementList attribute="categories"/>
    <h5>Brand</h5>
    <RefinementList attribute="brand" withSearchBox/>
    <h5>Type</h5>
    <Menu attribute="type"/>
  </div>

const Content = () =>
  <div className="right-column" >
    <div className="info">
      <Stats/>
      <SortBy
        defaultRefinement="instant_search"
        items={[
          {value: 'instant_search', label: 'Most Relevant'},
          {value: 'instant_search_price_asc', label: 'Lowest Price'},
          {value: 'instant_search_price_desc', label: 'Highest Price'}
        ]}
        />
    </div>
    <Hits hitComponent={Hit}/>
    <div className="pagination">
      <Pagination showLast/>
    </div>
  </div>


class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        indexName="instant_search">

      <header className="header">
        <img src="instant_search_logo@2x.png"/>
        <CurrentRefinements />
        <ClearRefinements />
        <SearchBox translations={{placeholder: 'Search for Products'}} />
      </header>
      <main>
        <Sidebar/>
        <Content/>
      </main>
    </InstantSearch>
    );
  }
}

export default App;
