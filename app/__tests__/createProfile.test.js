import {} from "@testing-library/react";
import fetchMock from "jest-fetch-mock" ;
import createAProfile from "../app/createProfile/api/createAProfile.js";
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateProfileForm from '../app/components/CreateProfileForm/CreateProfileForm.jsx';


beforeEach(() =>{
    fetchMock.resetMocks();
});

describe("CreateProfileForm", ()=>{
    it("Ensure CreateProfileForm renders", () =>{
        render(<CreateProfileForm/>);
    });
});

describe("CreateProfileForm", ()=>{
    it("Ensure fullName input can be updated", async () => {
        const { getByLabelText, getByText } = render(<CreateProfileForm />);
        const fullNameInput = getByLabelText(/Full Name/); // Returns input field with the associated label as DOM object
        userEvent.type(fullNameInput, "John Doe");
    
        await waitFor(() => { //Virtual DOM updates are asynchronous. Thereforem we need to wait until the value is updated
            expect(fullNameInput.value).toEqual("John Doe"); 
        });
    });
    

});

describe("CreateProfileForm", ()=>{
    it("Ensure country input can be updated", async () => {
        const { getByLabelText, getByText } = render(<CreateProfileForm />);
        const countryInput = getByLabelText(/Country Of Residence/);
        userEvent.type(countryInput, "Canada");
    
        await waitFor(() => { //Virtual DOM updates are asynchronous. Thereforem we need to wait until the value is updated
            expect(countryInput.value).toEqual("Canada"); 
        });
    });

});

describe("CreateProfileForm", ()=>{
    it("Ensure country input can be updated", async () => {
        const { getByLabelText, getByText } = render(<CreateProfileForm />);
        const countryInput = getByLabelText(/Country Of Residence/);
        userEvent.type(countryInput, "Canada");
    
        await waitFor(() => { //Virtual DOM updates are asynchronous. Thereforem we need to wait until the value is updated
            expect(countryInput.value).toEqual("Canada"); 
        });
    });

});

describe("CreateProfileForm", ()=>{
    it("Ensure address input can be updated", async () => {
        const { getByLabelText, getByText } = render(<CreateProfileForm />);
        const addrInput = getByLabelText(/Address/);
        userEvent.type(addrInput, "Wellington St, Ottawa");
    
        await waitFor(() => { //Virtual DOM updates are asynchronous. Thereforem we need to wait until the value is updated
            expect(addrInput.value).toEqual("Wellington St, Ottawa"); 
        });
    });

});

describe("OccupationTags", ()=>{
    it("Ensure an occupationTag input can be updated", async () => {
        const { getByLabelText, getByText } = render(<CreateProfileForm />);
        const occupationTagsInput = getByLabelText(/Occupation Tags/);
        userEvent.type(occupationTagsInput, "Software Engineer");
    
        await waitFor(() => { //Virtual DOM updates are asynchronous. Thereforem we need to wait until the value is updated
            expect(occupationTagsInput.value).toEqual("Software Engineer"); 
        });
    });

});

describe("CreateProfileForm", ()=>{
    it("Ensure bio input can be updated", async () => {
        const { getByLabelText, getByText } = render(<CreateProfileForm />);
        const bioInput = getByLabelText(/Bio/);
        userEvent.type(bioInput, "Something");
    
        await waitFor(() => { //Virtual DOM updates are asynchronous. Thereforem we need to wait until the value is updated
            expect(bioInput.value).toEqual("Something"); 
        });
    });

});


describe("createAProfile", () =>{
it("Ensure profile can be created given correct fields", async()=>{
    
        const mockRequest = {
            fullName: "John Doe",
            country: "Canada",
            address: "Some Test Address 123",
            bio: "Some Test Bio",
            occupationTags: ["test1", "test2"]
        };

        const response = await createAProfile(mockRequest);

        expect(response).toEqual(true);
    
    });

});


describe("createAProfile", () =>{
    it("Ensure profile can't be created given incorrect fields", async()=>{
        
            const mockRequest = {
                fullName: "John Doe",
                country: "",
                address: "",
                bio: "Some Test Bio",
                occupationTags: ["test1", "test2"]
            };
    
            const response = await createAProfile(mockRequest);
    
            expect(response).toEqual(false);
        
        });
    
    });

