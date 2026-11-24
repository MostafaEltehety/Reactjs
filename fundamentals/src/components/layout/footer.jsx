function Footer(){
    const year=new Date().getFullYear();
    return  (
<footer>
    <strong>Elzero Web School</strong>
    <p>Learn. Practice. Build.</p>
    <small>@{year} - All Rigths Reserved</small>
</footer>
    );
}

export default Footer;