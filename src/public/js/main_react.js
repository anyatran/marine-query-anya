var FilterButton = React.createClass({
  getInitialState: function() {
    return {showed: false};
  },
  handleClick: function(event) {
    this.setState({showed: !this.state.showed});
  },
  render: function() {
    return (
      <a onClick={this.handleClick} id="nav-expander" className="nav-expander fixed"  styles="padding-left: 25px;">
        FILTER
      </a>
    );
  }
});

ReactDOM.render(
  <FilterButton />,
  document.getElementById('filterButton')
);