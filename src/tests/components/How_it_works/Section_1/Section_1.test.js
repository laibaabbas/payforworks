import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


import { shallow } from "enzyme";
import Section_1 from "../../../../Components/How_it_works/Section_1/Sectioion_1";

Enzyme.configure({ adapter: new Adapter() });

describe("Section_1", () => {
  it("renders Section component", () => {
    const wrapper = shallow(< Section_1/>);
    const h1 = wrapper.find("h1");
    const text = h1.text();
    console.log(text);
    expect(text).toBe("How It Works");
    const paragragh = wrapper.find("p");
    const paraText = paragragh.text();
    console.log(paraText);
    expect(paraText).toBe("In just a few simple steps we will get you connected.");

  });
});
