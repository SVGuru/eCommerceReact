import '../style.css';

const Contactme = () => {
    return ( 

        <div id="div1">

        <h1>Contact me</h1>
        <form>
        <lable for="name">Name</lable>
        <input type="text" name="name" id="name" placeholder="Enter your name" required/>
        <br/><br/>
        <lable for="email">Email</lable>
        <input type="email" name="email" id="email" placeholder="Enter your email" required/>
        <br/><br/>
        <lable for="about">Message</lable>
        <br/>
        <textarea name="about" id="about" rows="4" cols="80">
            Type your text here
        </textarea>
        <br/>
        
        <button type="submit" Name="Submit">Submit</button><br/>
        </form>

        </div>


     );
}
 
export default Contactme;