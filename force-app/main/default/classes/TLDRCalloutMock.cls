@isTest
/**
 * Test class for TLDRCallout class
 */
global class TLDRCalloutMock implements HttpCalloutMock{

    global HTTPResponse respond(HTTPRequest request) {
        HttpResponse response = new HttpResponse();
        response.setBody('Hi');
        return response; 
    }
    
}