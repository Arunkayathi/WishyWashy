"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WishyWashy = function (_React$Component) {
    _inherits(WishyWashy, _React$Component);

    function WishyWashy(props) {
        _classCallCheck(this, WishyWashy);

        var _this = _possibleConstructorReturn(this, (WishyWashy.__proto__ || Object.getPrototypeOf(WishyWashy)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.onRemoveOptions = _this.onRemoveOptions.bind(_this);
        _this.handleOption = _this.handleOption.bind(_this);
        return _this;
    }

    _createClass(WishyWashy, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var data = localStorage.getItem("options");
                var options = JSON.parse(data);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var data = JSON.stringify(this.state.options);
                localStorage.setItem("options", data);
            }
        }
    }, {
        key: "onRemoveOptions",
        value: function onRemoveOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "onMakeDecision",
        value: function onMakeDecision() {
            var index = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[index]);
        }
    }, {
        key: "handleOption",
        value: function handleOption(option) {
            if (option.trim().length === 0) {
                return "Enter a text";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Option already exists";
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "handleRemoveOption",
        value: function handleRemoveOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, onMakeDecision: function onMakeDecision() {
                        return _this2.onMakeDecision();
                    } }),
                React.createElement(Options, { onRemoveOptions: this.onRemoveOptions,
                    options: this.state.options,
                    handleRemoveOption: function handleRemoveOption(option) {
                        return _this2.handleRemoveOption(option);
                    } }),
                React.createElement(AddOption, { handleOption: this.handleOption })
            );
        }
    }]);

    return WishyWashy;
}(React.Component);

WishyWashy.defaultProps = {
    options: ["1", "2"]
};
var Header = function Header() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Wishy-Washy"
        ),
        React.createElement(
            "p",
            null,
            "Let allow computer to choose your decison :)"
        )
    );
};
var Action = function Action(_ref) {
    var hasOptions = _ref.hasOptions,
        onMakeDecision = _ref.onMakeDecision;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !hasOptions, onClick: onMakeDecision },
            "What Should I do?"
        )
    );
};

var Options = function Options(_ref2) {
    var options = _ref2.options,
        onRemoveOptions = _ref2.onRemoveOptions,
        handleRemoveOption = _ref2.handleRemoveOption;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: onRemoveOptions },
            "Remove All"
        ),
        options.length === 0 && React.createElement(
            "p",
            null,
            "Please add an option to get started"
        ),
        options.map(function (option, index) {
            return React.createElement(Option, { key: option, optionText: option,
                handleRemoveOption: handleRemoveOption });
        })
    );
};

var Option = function Option(_ref3) {
    var optionText = _ref3.optionText,
        handleRemoveOption = _ref3.handleRemoveOption;

    return React.createElement(
        "div",
        null,
        optionText,
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return handleRemoveOption(optionText);
                } },
            "Remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.state = {
            error: undefined
        };
        _this3.addOption = _this3.addOption.bind(_this3);
        return _this3;
    }

    _createClass(AddOption, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            console.log(option);
            var error = this.props.handleOption(option);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.addOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(WishyWashy, { options: ["a", "b"] }), document.getElementById('app'));
