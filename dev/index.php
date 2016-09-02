<?php include('header.php'); ?>

<body>
<div id="scroller">
    <div id="story">
        <div class="intro"></div>

        <div class="chapter">
            <b>Paper production</b><br>
            Paper for Recycling is a key raw material in the paper
            industry. During a series of operations the raw material
            is converted into new paper and board products.
            <div class="scroll-trigger">
                <i>Scroll down to start</i>
                <div class="continue-line"></div>
            </div>
        </div>

        <div class="chapter">
            <b>sidestream</b><br>
            A significant amount of the raw material is lost from the
            process in the form of sidestreams. Disposing of these
            sidestreams often means additional costs for the paper mill.
            <br><br>
            However, the valuable components in these sidestreams can
            find applications and be possibly turned into profits.
        </div>

        <div class="chapter">
            Explore opportunities:
            <div class="legend"></div>
            <div onclick="openDisclaimer()" class="link">Disclaimer</div>
        </div>

    </div>
</div>

<div id="infographic"></div>

<?php include('menu.php'); ?>

<div class="overlay"></div>

<div class="disclaimer">
    <h2>Disclaimer</h2>
    <p>
        There are many opportunities for the paper industry to
        transform sidestreams into valuable products. How? By
        implementing innovative technologies.
    </p>
    <p>
        This graph shows the potential of 16 sidestream
        valorisation technologies, indicatively ordered by their
        economic potential and by their techno- logy readyness
        level (TRL).
    </p>
    <div class="close-button" onclick="closeDisclaimer()">×</div>
</div>

<script src="assets/d3/d3.min.js"></script>
<script src="assets/jquery/jquery.min.js"></script>
<script src="js/valorisations.js"></script>
<script src="js/paths.js"></script>
<script src="js/sidestreams.js"></script>
<!-- models -->
<script src="js/models/_NodeModel.js"></script>
<script src="js/models/_FilterModel.js"></script>
<script src="js/models/App.js"></script>
<script src="js/models/Story.js"></script>
<script src="js/models/Sidestream.js"></script>
<script src="js/models/Settings.js"></script>
<script src="js/models/Canvas.js"></script>
<script src="js/models/Set.js"></script>
<script src="js/models/Valorisation.js"></script>
<script src="js/models/paths/Path.js"></script>
<script src="js/models/paths/Outstream.js"></script>
<script src="js/models/paths/Subpath.js"></script>
<script src="js/models/paths/Cover.js"></script>
<script src="js/models/paths/Coversubpath.js"></script>
<script src="js/models/paths/Static.js"></script>
<script src="js/models/buttons/LegendButton.js"></script>
<script src="js/models/paths/Circle.js"></script>
<script src="js/models/paths/ArcCover.js"></script>
<script src="js/models/paths/Arc.js"></script>

<script src="js/main.js"></script>
</body>
</html>